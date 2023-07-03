'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionUpdateAddressesRequest = void 0;
class ShopifySubscriptionUpdateAddressesRequest {
    static getAttributeTypeMap() {
        return ShopifySubscriptionUpdateAddressesRequest.attributeTypeMap;
    }
}
exports.ShopifySubscriptionUpdateAddressesRequest = ShopifySubscriptionUpdateAddressesRequest;
ShopifySubscriptionUpdateAddressesRequest.discriminator = undefined;
ShopifySubscriptionUpdateAddressesRequest.attributeTypeMap = [
    {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "ShopifySubscriptionAddressCreate"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "ShopifySubscriptionAddressCreate"
    }
];
