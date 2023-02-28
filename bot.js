require('dotenv').config();
const {Telegraf} = require('telegraf');
const axios = require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
    sendStartMessage(ctx);
});

const sendStartMessage = (ctx) => {
    console.log(ctx.from);
    const mensajeInicial = `Hola ${ctx.from.username}, bienvenido al bot de Dango`;
    bot.telegram.sendMessage(ctx.chat.id, mensajeInicial, {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Obtener un gif", callback_data: "menuGif"},
                ],
                [
                    {text: "Creditos", callback_data: "creditos"}
                ]
            ]
        }
    });
}

bot.action("creditos", (ctx) => {
    ctx.answerCbQuery();
    ctx.reply("Bot creado por @SantiDango");
});

bot.action("menuGif", (ctx) => {
    ctx.answerCbQuery();
    ctx.telegram.sendMessage(ctx.chat.id, "Seleccione una opcion...", {
        reply_markup: {
            keyboard: [
                [
                    {text: "Obtener un gif random"},
                    {text: "Obtener un gif random de X categoria"}
                ],
                [
                    {text: "Salir"}
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.hears("Obtener un gif random", (ctx) => {
    axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}`)
        .then((response) => {
            ctx.replyWithVideo(response.data.data.images.original.mp4);
        })
        .catch((error) => {
            console.log(error);
        });    
})

bot.hears("Obtener un gif random de X categoria", (ctx) => {
    ctx.reply("Escribe la categoria");
    bot.on("text", (ctx) => {
        axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=${ctx.message.text}`)
            .then((response) => {
                ctx.replyWithVideo(response.data.data.images.original.mp4);
            })
            .catch((error) => {
                console.log(error);
            });
    });
});

bot.hears("Salir", (ctx) => {
    ctx.reply("Hasta luego", {
        reply_markup: {
            remove_keyboard: true
        }
    });
});

bot.launch();