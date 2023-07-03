'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriberCreation = void 0;
class ShopifySubscriberCreation {
    static getAttributeTypeMap() {
        return ShopifySubscriberCreation.attributeTypeMap;
    }
}
exports.ShopifySubscriberCreation = ShopifySubscriberCreation;
ShopifySubscriberCreation.discriminator = undefined;
ShopifySubscriberCreation.attributeTypeMap = [
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    },
    {
        "name": "shopifyCustomerId",
        "baseName": "shopifyCustomerId",
        "type": "string"
    }
];
