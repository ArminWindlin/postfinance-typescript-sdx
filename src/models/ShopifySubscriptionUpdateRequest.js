'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionUpdateRequest = void 0;
class ShopifySubscriptionUpdateRequest {
    static getAttributeTypeMap() {
        return ShopifySubscriptionUpdateRequest.attributeTypeMap;
    }
}
exports.ShopifySubscriptionUpdateRequest = ShopifySubscriptionUpdateRequest;
ShopifySubscriptionUpdateRequest.discriminator = undefined;
ShopifySubscriptionUpdateRequest.attributeTypeMap = [
    {
        "name": "billingConfiguration",
        "baseName": "billingConfiguration",
        "type": "ShopifySubscriptionModelBillingConfiguration"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<ShopifySubscriptionModelItem>"
    },
    {
        "name": "storeOrderConfirmationEmailEnabled",
        "baseName": "storeOrderConfirmationEmailEnabled",
        "type": "boolean"
    },
    {
        "name": "subscriberSuspensionAllowed",
        "baseName": "subscriberSuspensionAllowed",
        "type": "boolean"
    }
];
