'use strict';
import Credentials from './configs/credentials';
import moment from 'moment';

class Bot {

    constructor(client) {
        this._client = client;
    }

    handleMessage(message) {
        if (message.type !== 'text/plain') {
            return;
        }
    }

    sendTextMessage(to, content) {
        let msg = {
            type: "text/plain",
            content: content,
            to: to
        };

        this._client.sendMessage(msg);
    }

    // It's not working yet
    sendTextScheduledMessage(to, content, date) {
        let msg = {
            "to": "postmaster@scheduler.msging.net",
            "method": "set",
            "uri": "/schedules",
            "type": "application/vnd.iris.schedule+json",
            "resource": {
                "message": {
                    "to": to,
                    "type": "text/plain",
                    "content": content
                },
                "when": '2017-04-04T21:42:53-03:00' // moment().format()
            }
        };

        this._client.sendMessage(msg);
    }

    sendPhoto(to, title, text, uriImage, previewUri) {
        let msg = {
            "to": to,
            "type": "application/vnd.lime.media-link+json",
            "content": {
                "title": title,
                "text": text,
                "type": "image/jpeg",
                "uri": uriImage,
                "size": 227791,
                "previewUri": previewUri,
                "previewType": "image/jpeg"
            }
        };

        this._client.sendMessage(msg);
    }

    sendAudio(to, uri) {
        let msg = {
            "to": to,
            "type": "application/vnd.lime.media-link+json",
            "content": {
                "type": "audio/mp3",
                "uri": uri,
                "size": 3124123
            }
        };
        this._client.sendMessage(msg);
    }

    sendLink(to, text, uri) {
        let msg = {
            "to": to,
            "type": "application/vnd.lime.web-link+json",
            "content": {
                "uri": uri,
                "target": "self",
                "text": text
            }
        };
        this._client.sendMessage(msg);
    }

    sendMenu(to, text, options) {
        let msg = {
            "to": to,
            "type": "application/vnd.lime.select+json",
            "content": {
                "text": text,
                "options": [
                    {
                        "order": 1,
                        "text": "Primeira opção"
                    },
                    {
                        "order": 2,
                        "text": "Segunda opção"
                    },
                    {
                        "order": 3,
                        "text": "Terceira opção",
                        "type": "application/json",
                        "value": {
                            "key1": "value1",
                            "key2": 2
                        }
                    }
                ]
            }
        };

        this._client.sendMessage(msg);
    }

    sendMediaMenu(to, text, options) {
        let msg = {
            "to": to,
            "type": "application/vnd.lime.document-select+json",
            "content": {
                "header": {
                    "type": "application/vnd.lime.media-link+json",
                    "value": {
                        "title": "Seja bem-vindo ao Chapeleiro Maluco",
                        "text": text,
                        "type": "image/jpeg",
                        "uri": "http://petersapparel.parseapp.com/img/item100-thumb.png"
                    }
                },
                "options": [
                    {
                        "label": {
                            "type": "application/vnd.lime.web-link+json",
                            "value": {
                                "text": "Visitar site",
                                "uri": "https://petersapparel.parseapp.com/view_item?item_id=100"
                            }
                        }
                    },
                    {
                        "label": {
                            "type": "text/plain",
                            "value": "Ver estoque"
                        }
                    }
                ]
            }
        };

        this._client.sendMessage(msg);
    }

    registerAction(resource) {
        return client.sendCommand({
            id: Lime.Guid(),
            method: Lime.CommandMethod.SET,
            type: 'application/vnd.iris.eventTrack+json',
            uri: '/event-track',
            resource: resource
        })
    }

    sendCommand() {
        let command = {
            uri: "/ping",
            method: Lime.CommandMethod.GET
        };
        this._client.sendCommand(command);
    }
}

export default Bot;