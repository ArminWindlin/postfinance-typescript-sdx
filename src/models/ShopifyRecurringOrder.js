'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyRecurringOrder = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class ShopifyRecurringOrder extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShopifyRecurringOrder.attributeTypeMap);
    }
}
exports.ShopifyRecurringOrder = ShopifyRecurringOrder;
ShopifyRecurringOrder.discriminator = undefined;
ShopifyRecurringOrder.attributeTypeMap = [
    {
        "name": "billedOn",
        "baseName": "billedOn",
        "type": "Date"
    },
    {
        "name": "checkoutToken",
        "baseName": "checkoutToken",
        "type": "string"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "failureReason",
        "baseName": "failureReason",
        "type": "FailureReason"
    },
    {
        "name": "orderId",
        "baseName": "orderId",
        "type": "string"
    },
    {
        "name": "orderName",
        "baseName": "orderName",
        "type": "string"
    },
    {
        "name": "plannedExecutionDate",
        "baseName": "plannedExecutionDate",
        "type": "Date"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "recurrenceNumber",
        "baseName": "recurrenceNumber",
        "type": "number"
    },
    {
        "name": "shop",
        "baseName": "shop",
        "type": "number"
    },
    {
        "name": "startedProcessingOn",
        "baseName": "startedProcessingOn",
        "type": "Date"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "ShopifyRecurringOrderState"
    },
    {
        "name": "subscriptionVersion",
        "baseName": "subscriptionVersion",
        "type": "ShopifySubscriptionVersion"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "ShopifyTransaction"
    }
];
