'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookUrlCreate = void 0;
const AbstractWebhookUrlUpdate_1 = require("./AbstractWebhookUrlUpdate");
class WebhookUrlCreate extends AbstractWebhookUrlUpdate_1.AbstractWebhookUrlUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WebhookUrlCreate.attributeTypeMap);
    }
}
exports.WebhookUrlCreate = WebhookUrlCreate;
WebhookUrlCreate.discriminator = undefined;
WebhookUrlCreate.attributeTypeMap = [];
