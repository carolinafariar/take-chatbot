import * as MessagingHub from 'messaginghub-client';
import Credentials from './configs/credentials.js';
const WebSocketTransport = require('lime-transport-websocket');
import Lime from 'lime-js';
import Bot from './Bot';

let client = new MessagingHub.ClientBuilder()
    .withIdentifier(Credentials.blip.identifier)
    .withAccessKey(Credentials.blip.accessKey)
    .withTransportFactory(() => new WebSocketTransport())
    .build();

let bot = new Bot(client);

client.connectWithKey(Credentials.blip.identifier, Credentials.blip.accessKey).then((session) => {
    console.log('CONECTADO');
}).catch((err) => {
    console.error(err)
});

client.addMessageReceiver("text/plain", function (message) {
    console.log('Recebido');
    bot.handleMessage(message);
    bot.sendTextMessage(message.from, message.content);
    // bot.sendMediaMenu(message.from, 'Este é o menu!');
    // bot.sendTextScheduledMessage(message.from, 'agendado');
});