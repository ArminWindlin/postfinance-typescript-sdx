'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyTransaction = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class ShopifyTransaction extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShopifyTransaction.attributeTypeMap);
    }
}
exports.ShopifyTransaction = ShopifyTransaction;
ShopifyTransaction.discriminator = undefined;
ShopifyTransaction.attributeTypeMap = [
    {
        "name": "checkoutId",
        "baseName": "checkoutId",
        "type": "string"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "integration",
        "baseName": "integration",
        "type": "ShopifyIntegration"
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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "ShopifyTransactionState"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
