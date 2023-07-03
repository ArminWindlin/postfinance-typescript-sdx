'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionInvoiceCommentCreate = void 0;
const AbstractTransactionInvoiceCommentActive_1 = require("./AbstractTransactionInvoiceCommentActive");
class TransactionInvoiceCommentCreate extends AbstractTransactionInvoiceCommentActive_1.AbstractTransactionInvoiceCommentActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionInvoiceCommentCreate.attributeTypeMap);
    }
}
exports.TransactionInvoiceCommentCreate = TransactionInvoiceCommentCreate;
TransactionInvoiceCommentCreate.discriminator = undefined;
TransactionInvoiceCommentCreate.attributeTypeMap = [
    {
        "name": "transactionInvoice",
        "baseName": "transactionInvoice",
        "type": "number"
    }
];
