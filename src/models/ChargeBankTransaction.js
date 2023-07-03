'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeBankTransaction = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class ChargeBankTransaction extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChargeBankTransaction.attributeTypeMap);
    }
}
exports.ChargeBankTransaction = ChargeBankTransaction;
ChargeBankTransaction.discriminator = undefined;
ChargeBankTransaction.attributeTypeMap = [
    {
        "name": "bankTransaction",
        "baseName": "bankTransaction",
        "type": "BankTransaction"
    },
    {
        "name": "completion",
        "baseName": "completion",
        "type": "number"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
    },
    {
        "name": "transactionCurrencyAmount",
        "baseName": "transactionCurrencyAmount",
        "type": "number"
    },
    {
        "name": "transactionCurrencyValueAmount",
        "baseName": "transactionCurrencyValueAmount",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
