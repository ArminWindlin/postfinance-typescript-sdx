'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractShopifySubscriptionProductUpdate = void 0;
class AbstractShopifySubscriptionProductUpdate {
    static getAttributeTypeMap() {
        return AbstractShopifySubscriptionProductUpdate.attributeTypeMap;
    }
}
exports.AbstractShopifySubscriptionProductUpdate = AbstractShopifySubscriptionProductUpdate;
AbstractShopifySubscriptionProductUpdate.discriminator = undefined;
AbstractShopifySubscriptionProductUpdate.attributeTypeMap = [
    {
        "name": "absolutePriceAdjustment",
        "baseName": "absolutePriceAdjustment",
        "type": "number"
    },
    {
        "name": "billingDayOfMonth",
        "baseName": "billingDayOfMonth",
        "type": "number"
    },
    {
        "name": "billingIntervalAmount",
        "baseName": "billingIntervalAmount",
        "type": "number"
    },
    {
        "name": "billingIntervalUnit",
        "baseName": "billingIntervalUnit",
        "type": "ShopifySubscriptionBillingIntervalUnit"
    },
    {
        "name": "billingWeekday",
        "baseName": "billingWeekday",
        "type": "ShopifySubscriptionWeekday"
    },
    {
        "name": "fixedPrice",
        "baseName": "fixedPrice",
        "type": "number"
    },
    {
        "name": "maximalBillingCycles",
        "baseName": "maximalBillingCycles",
        "type": "number"
    },
    {
        "name": "maximalSuspendableCycles",
        "baseName": "maximalSuspendableCycles",
        "type": "number"
    },
    {
        "name": "minimalBillingCycles",
        "baseName": "minimalBillingCycles",
        "type": "number"
    },
    {
        "name": "pricingOption",
        "baseName": "pricingOption",
        "type": "ShopifySubscriptionProductPricingOption"
    },
    {
        "name": "relativePriceAdjustment",
        "baseName": "relativePriceAdjustment",
        "type": "number"
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
    },
    {
        "name": "terminationBillingCycles",
        "baseName": "terminationBillingCycles",
        "type": "number"
    }
];
