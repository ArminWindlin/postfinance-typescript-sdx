'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscription = void 0;
class ShopifySubscription {
    static getAttributeTypeMap() {
        return ShopifySubscription.attributeTypeMap;
    }
}
exports.ShopifySubscription = ShopifySubscription;
ShopifySubscription.discriminator = undefined;
ShopifySubscription.attributeTypeMap = [
    {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "number"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
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
        "name": "initialExecutionDate",
        "baseName": "initialExecutionDate",
        "type": "Date"
    },
    {
        "name": "initialPaymentTransaction",
        "baseName": "initialPaymentTransaction",
        "type": "number"
    },
    {
        "name": "initialShopifyTransaction",
        "baseName": "initialShopifyTransaction",
        "type": "number"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
    },
    {
        "name": "orderRecurrenceNumber",
        "baseName": "orderRecurrenceNumber",
        "type": "number"
    },
    {
        "name": "shop",
        "baseName": "shop",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "ShopifySubscriptionState"
    },
    {
        "name": "subscriber",
        "baseName": "subscriber",
        "type": "ShopifySubscriber"
    },
    {
        "name": "terminatedBy",
        "baseName": "terminatedBy",
        "type": "number"
    },
    {
        "name": "terminatedOn",
        "baseName": "terminatedOn",
        "type": "Date"
    },
    {
        "name": "terminationRequestDate",
        "baseName": "terminationRequestDate",
        "type": "Date"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
