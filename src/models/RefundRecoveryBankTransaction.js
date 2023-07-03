'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundRecoveryBankTransaction = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class RefundRecoveryBankTransaction extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RefundRecoveryBankTransaction.attributeTypeMap);
    }
}
exports.RefundRecoveryBankTransaction = RefundRecoveryBankTransaction;
RefundRecoveryBankTransaction.discriminator = undefined;
RefundRecoveryBankTransaction.attributeTypeMap = [
    {
        "name": "bankTransaction",
        "baseName": "bankTransaction",
        "type": "BankTransaction"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItem>"
    },
    {
        "name": "refund",
        "baseName": "refund",
        "type": "Refund"
    },
    {
        "name": "refundCurrencyAmount",
        "baseName": "refundCurrencyAmount",
        "type": "number"
    },
    {
        "name": "refundCurrencyValueAmount",
        "baseName": "refundCurrencyValueAmount",
        "type": "number"
    },
    {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
