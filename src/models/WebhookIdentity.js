'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookIdentity = void 0;
class WebhookIdentity {
    static getAttributeTypeMap() {
        return WebhookIdentity.attributeTypeMap;
    }
}
exports.WebhookIdentity = WebhookIdentity;
WebhookIdentity.discriminator = undefined;
WebhookIdentity.attributeTypeMap = [
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
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
