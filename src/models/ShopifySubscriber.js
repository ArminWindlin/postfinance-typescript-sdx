'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriber = void 0;
class ShopifySubscriber {
    static getAttributeTypeMap() {
        return ShopifySubscriber.attributeTypeMap;
    }
}
exports.ShopifySubscriber = ShopifySubscriber;
ShopifySubscriber.discriminator = undefined;
ShopifySubscriber.attributeTypeMap = [
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
    },
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
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
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "shop",
        "baseName": "shop",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "ShopifySubscriberState"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
