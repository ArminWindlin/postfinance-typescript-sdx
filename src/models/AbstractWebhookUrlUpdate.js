'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractWebhookUrlUpdate = void 0;
class AbstractWebhookUrlUpdate {
    static getAttributeTypeMap() {
        return AbstractWebhookUrlUpdate.attributeTypeMap;
    }
}
exports.AbstractWebhookUrlUpdate = AbstractWebhookUrlUpdate;
AbstractWebhookUrlUpdate.discriminator = undefined;
AbstractWebhookUrlUpdate.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    }
];
