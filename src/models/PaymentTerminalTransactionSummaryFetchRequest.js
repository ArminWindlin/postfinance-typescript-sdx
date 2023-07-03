'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTerminalTransactionSummaryFetchRequest = void 0;
class PaymentTerminalTransactionSummaryFetchRequest {
    static getAttributeTypeMap() {
        return PaymentTerminalTransactionSummaryFetchRequest.attributeTypeMap;
    }
}
exports.PaymentTerminalTransactionSummaryFetchRequest = PaymentTerminalTransactionSummaryFetchRequest;
PaymentTerminalTransactionSummaryFetchRequest.discriminator = undefined;
PaymentTerminalTransactionSummaryFetchRequest.attributeTypeMap = [
    {
        "name": "format",
        "baseName": "format",
        "type": "TerminalReceiptFormat"
    },
    {
        "name": "summaryId",
        "baseName": "summaryId",
        "type": "number"
    },
    {
        "name": "width",
        "baseName": "width",
        "type": "number"
    }
];
