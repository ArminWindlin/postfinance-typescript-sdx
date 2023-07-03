'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookListener = void 0;
class WebhookListener {
    static getAttributeTypeMap() {
        return WebhookListener.attributeTypeMap;
    }
}
exports.WebhookListener = WebhookListener;
WebhookListener.discriminator = undefined;
WebhookListener.attributeTypeMap = [
    {
        "name": "entity",
        "baseName": "entity",
        "type": "number"
    },
    {
        "name": "entityStates",
        "baseName": "entityStates",
        "type": "Array<string>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "identity",
        "baseName": "identity",
        "type": "WebhookIdentity"
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
        "name": "notifyEveryChange",
        "baseName": "notifyEveryChange",
        "type": "boolean"
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
        "type": "WebhookUrl"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
