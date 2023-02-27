require('dotenv').config();
const {Telegraf} = require('telegraf');
const axios = require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
    ctx.reply("Hola, bienvenido al bot de prueba");
});

bot.command("hola", (ctx) => {
    console.log(ctx.from)
    ctx.reply(`Hola ${ctx.from.username}, soy un bot de prueba`);
});

// Comando para obtener la suma de dos números
bot.command("suma", (ctx) => {
    let num1 = ctx.message.text.split(" ")[1];
    let num2 = ctx.message.text.split(" ")[2];
    let resultado = parseInt(num1) + parseInt(num2);
    ctx.reply("El resultado es: " + resultado);
});

// bot.on("text", (ctx) => {
//     let mensaje = ctx.message.text;
//     ctx.reply("Has escrito: " + mensaje);
// });

bot.hears("Prueba", (ctx) => {
    ctx.reply("Has escrito la palabra prueba, bien hecho, eres un crack");
})

bot.launch();