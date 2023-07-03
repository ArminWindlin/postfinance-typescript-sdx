'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTerminalTransactionSummary = void 0;
class PaymentTerminalTransactionSummary {
    static getAttributeTypeMap() {
        return PaymentTerminalTransactionSummary.attributeTypeMap;
    }
}
exports.PaymentTerminalTransactionSummary = PaymentTerminalTransactionSummary;
PaymentTerminalTransactionSummary.discriminator = undefined;
PaymentTerminalTransactionSummary.attributeTypeMap = [
    {
        "name": "dccTransactionSums",
        "baseName": "dccTransactionSums",
        "type": "Array<PaymentTerminalDccTransactionSum>"
    },
    {
        "name": "endedOn",
        "baseName": "endedOn",
        "type": "Date"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
    },
    {
        "name": "numberOfTransactions",
        "baseName": "numberOfTransactions",
        "type": "number"
    },
    {
        "name": "paymentTerminal",
        "baseName": "paymentTerminal",
        "type": "number"
    },
    {
        "name": "receipt",
        "baseName": "receipt",
        "type": "string"
    },
    {
        "name": "startedOn",
        "baseName": "startedOn",
        "type": "Date"
    },
    {
        "name": "transactionSums",
        "baseName": "transactionSums",
        "type": "Array<PaymentTerminalTransactionSum>"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
