'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookListenerEntity = void 0;
class WebhookListenerEntity {
    static getAttributeTypeMap() {
        return WebhookListenerEntity.attributeTypeMap;
    }
}
exports.WebhookListenerEntity = WebhookListenerEntity;
WebhookListenerEntity.discriminator = undefined;
WebhookListenerEntity.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "technicalName",
        "baseName": "technicalName",
        "type": "string"
    }
];
