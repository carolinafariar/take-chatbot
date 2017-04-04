import * as MessagingHub from 'messaginghub-client';
import Credentials from './configs/credentials.js';
const WebSocketTransport = require('lime-transport-websocket');
import Lime from 'lime-js';

let client = new MessagingHub.ClientBuilder()
    .withIdentifier(Credentials.blip.identifier)
    .withAccessKey(Credentials.blip.accessKey)
    .withTransportFactory(() => new WebSocketTransport())
    .build();

function registerAction(resource) {
    return client.sendCommand({
        id: Lime.Guid(),
        method: Lime.CommandMethod.SET,
        type: 'application/vnd.iris.eventTrack+json',
        uri: '/event-track',
        resource: resource
    })
}

client.connectWithKey(Credentials.blip.identifier, Credentials.blip.accessKey).then((session) => {
    console.log('CONECTADO');
}).catch((err) => {
    console.error(err)
});

client.addMessageReceiver("text/plain", function (message) {
    console.log('Recebido');
    console.log(message)
    // This function is used to register events in Panel > Data Analytics
    // registerAction({ category: 'User', action: 'first request' });
    // registerAction({ category: 'User', action: 'asked again after denial' });
});