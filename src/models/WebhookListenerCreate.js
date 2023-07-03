'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookListenerCreate = void 0;
const AbstractWebhookListenerUpdate_1 = require("./AbstractWebhookListenerUpdate");
class WebhookListenerCreate extends AbstractWebhookListenerUpdate_1.AbstractWebhookListenerUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WebhookListenerCreate.attributeTypeMap);
    }
}
exports.WebhookListenerCreate = WebhookListenerCreate;
WebhookListenerCreate.discriminator = undefined;
WebhookListenerCreate.attributeTypeMap = [
    {
        "name": "entity",
        "baseName": "entity",
        "type": "number"
    },
    {
        "name": "identity",
        "baseName": "identity",
        "type": "number"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "number"
    }
];
