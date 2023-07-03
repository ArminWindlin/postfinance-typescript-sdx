'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTerminalDccTransactionSum = void 0;
class PaymentTerminalDccTransactionSum {
    static getAttributeTypeMap() {
        return PaymentTerminalDccTransactionSum.attributeTypeMap;
    }
}
exports.PaymentTerminalDccTransactionSum = PaymentTerminalDccTransactionSum;
PaymentTerminalDccTransactionSum.discriminator = undefined;
PaymentTerminalDccTransactionSum.attributeTypeMap = [
    {
        "name": "brand",
        "baseName": "brand",
        "type": "string"
    },
    {
        "name": "dccAmount",
        "baseName": "dccAmount",
        "type": "number"
    },
    {
        "name": "dccCurrency",
        "baseName": "dccCurrency",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
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
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
