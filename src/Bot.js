'use strict';
import Routes from './configs/routes';
import moment from 'moment';
import Util from './helpers/util';

class Bot {

    constructor(client) {
        this._client = client;
        this._previousOption = '';
    }

    handleMessage(message) {
        const helpMessageContent = ["Ficou perdido? Deixe-me te ajudar. Sobre qual assunto você deseja falar?"];

        if (Util.messageContainOption(message.content, 'Ajuda')) {
            this.sendTextMessage(message.from, helpMessageContent.toString());
            this._previousOption = 'Comecar';
        } else {
            let foundSomething = false;
            Routes.map((item) => {
                if (Util.messageContainOption(message.content, item.message)) {
                    if (this._previousOption === item.previousMessage) {
                        this.sendTextMessage(message.from, item.content.toString());
                        this._previousOption = item.message;
                        foundSomething = true;
                    }
                }
            });

            if (!foundSomething) {
                this.sendTextMessage(message.from, helpMessageContent.toString());
                this._previousOption = 'Comecar';
            }
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
}

export default Bot;