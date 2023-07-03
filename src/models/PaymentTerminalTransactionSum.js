'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTerminalTransactionSum = void 0;
class PaymentTerminalTransactionSum {
    static getAttributeTypeMap() {
        return PaymentTerminalTransactionSum.attributeTypeMap;
    }
}
exports.PaymentTerminalTransactionSum = PaymentTerminalTransactionSum;
PaymentTerminalTransactionSum.discriminator = undefined;
PaymentTerminalTransactionSum.attributeTypeMap = [
    {
        "name": "brand",
        "baseName": "brand",
        "type": "string"
    },
    {
        "name": "dccTipAmount",
        "baseName": "dccTipAmount",
        "type": "number"
    },
    {
        "name": "dccTransactionAmount",
        "baseName": "dccTransactionAmount",
        "type": "number"
    },
    {
        "name": "dccTransactionCount",
        "baseName": "dccTransactionCount",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "string"
    },
    {
        "name": "transactionAmount",
        "baseName": "transactionAmount",
        "type": "number"
    },
    {
        "name": "transactionCount",
        "baseName": "transactionCount",
        "type": "number"
    },
    {
        "name": "transactionCurrency",
        "baseName": "transactionCurrency",
        "type": "string"
    },
    {
        "name": "transactionTipAmount",
        "baseName": "transactionTipAmount",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
