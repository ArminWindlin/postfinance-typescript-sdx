'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookListenerUpdate = void 0;
const AbstractWebhookListenerUpdate_1 = require("./AbstractWebhookListenerUpdate");
class WebhookListenerUpdate extends AbstractWebhookListenerUpdate_1.AbstractWebhookListenerUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WebhookListenerUpdate.attributeTypeMap);
    }
}
exports.WebhookListenerUpdate = WebhookListenerUpdate;
WebhookListenerUpdate.discriminator = undefined;
WebhookListenerUpdate.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
