'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundBankTransaction = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class RefundBankTransaction extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RefundBankTransaction.attributeTypeMap);
    }
}
exports.RefundBankTransaction = RefundBankTransaction;
RefundBankTransaction.discriminator = undefined;
RefundBankTransaction.attributeTypeMap = [
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
