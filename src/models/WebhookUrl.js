'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookUrl = void 0;
class WebhookUrl {
    static getAttributeTypeMap() {
        return WebhookUrl.attributeTypeMap;
    }
}
exports.WebhookUrl = WebhookUrl;
WebhookUrl.discriminator = undefined;
WebhookUrl.attributeTypeMap = [
    {
        "name": "applicationManaged",
        "baseName": "applicationManaged",
        "type": "boolean"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
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
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
