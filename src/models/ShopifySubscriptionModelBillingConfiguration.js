'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionModelBillingConfiguration = void 0;
class ShopifySubscriptionModelBillingConfiguration {
    static getAttributeTypeMap() {
        return ShopifySubscriptionModelBillingConfiguration.attributeTypeMap;
    }
}
exports.ShopifySubscriptionModelBillingConfiguration = ShopifySubscriptionModelBillingConfiguration;
ShopifySubscriptionModelBillingConfiguration.discriminator = undefined;
ShopifySubscriptionModelBillingConfiguration.attributeTypeMap = [
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
        "name": "billingReferenceDate",
        "baseName": "billingReferenceDate",
        "type": "Date"
    },
    {
        "name": "billingWeekday",
        "baseName": "billingWeekday",
        "type": "ShopifySubscriptionWeekday"
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
        "name": "terminationBillingCycles",
        "baseName": "terminationBillingCycles",
        "type": "number"
    }
];
