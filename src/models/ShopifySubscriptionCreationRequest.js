'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionCreationRequest = void 0;
class ShopifySubscriptionCreationRequest {
    static getAttributeTypeMap() {
        return ShopifySubscriptionCreationRequest.attributeTypeMap;
    }
}
exports.ShopifySubscriptionCreationRequest = ShopifySubscriptionCreationRequest;
ShopifySubscriptionCreationRequest.discriminator = undefined;
ShopifySubscriptionCreationRequest.attributeTypeMap = [
    {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "ShopifySubscriptionAddressCreate"
    },
    {
        "name": "billingConfiguration",
        "baseName": "billingConfiguration",
        "type": "ShopifySubscriptionModelBillingConfiguration"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
    },
    {
        "name": "initialExecutionDate",
        "baseName": "initialExecutionDate",
        "type": "Date"
    },
    {
        "name": "integration",
        "baseName": "integration",
        "type": "number"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<ShopifySubscriptionModelItem>"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "ShopifySubscriptionAddressCreate"
    },
    {
        "name": "shippingMethodName",
        "baseName": "shippingMethodName",
        "type": "string"
    },
    {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
    },
    {
        "name": "storeOrderConfirmationEmailEnabled",
        "baseName": "storeOrderConfirmationEmailEnabled",
        "type": "boolean"
    },
    {
        "name": "subscriber",
        "baseName": "subscriber",
        "type": "ShopifySubscriberCreation"
    },
    {
        "name": "subscriberSuspensionAllowed",
        "baseName": "subscriberSuspensionAllowed",
        "type": "boolean"
    }
];
