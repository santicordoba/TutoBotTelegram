# Bot para Telegram que utiliza Telegraf y Axios

Este repositorio contiene un bot para Telegram que utiliza Telegraf y Axios para solicitar GIFs aleatorios desde la API de Giphy. El bot permite a los usuarios solicitar un GIF aleatorio o un GIF aleatorio de una categoría específica, que se ingresa a través de Telegram.

## Requisitos previos

Antes de utilizar este bot, asegúrate de tener instaladas las siguientes dependencias:

- Node.js
- Telegraf
- Axios

## Cómo utilizar el bot

1. Clona este repositorio en tu máquina local.
2. Crea un archivo `.env` en el directorio raiz copiando las entradas que encuentras en `.env.example`
3. En telegram busca BotFather y usa el comand `/start` para ver las opciones disponibles, el bot te guiara en el proceso de creación del bot y al final te dara un  API KEY que colocaras en el `.env`
4. Create una cuenta giphy y obtén una clave de API desde [https://developers.giphy.com/](https://developers.giphy.com/). Esta API KEY luego deberas pegarla en el archivo `.env`
5. Ejecuta `npm install` para instalar las dependencias.
6. Ejecuta `npm run dev` para iniciar el bot.

## Comandos del bot

- `/start`: muestra un menu inicial con dos opciones Obtener un gif o creditos

## Opcion Obtener un gif

- Si seleccionas esta opcion te mostrara un menu de teclado con dos opciones Obtener un gif Random o Obtener un gif por categoria

### Obtener un Gif random

- El bot respondera con gif random de la biblioteca de giphy

### Obtener un gif random por categoria

- El bot te pedira que ingreses por teclado una categoria, por ejemplo gatos y te respondera con un gif random de gatos de la biblioteca de giphy



#### Este bot lo desarrolle con el proposito de aprender y puede ser modificado y mejorado
