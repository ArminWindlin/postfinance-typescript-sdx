'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookUrlUpdate = void 0;
const AbstractWebhookUrlUpdate_1 = require("./AbstractWebhookUrlUpdate");
class WebhookUrlUpdate extends AbstractWebhookUrlUpdate_1.AbstractWebhookUrlUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WebhookUrlUpdate.attributeTypeMap);
    }
}
exports.WebhookUrlUpdate = WebhookUrlUpdate;
WebhookUrlUpdate.discriminator = undefined;
WebhookUrlUpdate.attributeTypeMap = [
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
