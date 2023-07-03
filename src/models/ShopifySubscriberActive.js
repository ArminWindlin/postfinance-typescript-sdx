'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriberActive = void 0;
class ShopifySubscriberActive {
    static getAttributeTypeMap() {
        return ShopifySubscriberActive.attributeTypeMap;
    }
}
exports.ShopifySubscriberActive = ShopifySubscriberActive;
ShopifySubscriberActive.discriminator = undefined;
ShopifySubscriberActive.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
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
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    }
];
