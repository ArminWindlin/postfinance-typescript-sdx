'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionInvoiceCommentActive = void 0;
const AbstractTransactionInvoiceCommentActive_1 = require("./AbstractTransactionInvoiceCommentActive");
class TransactionInvoiceCommentActive extends AbstractTransactionInvoiceCommentActive_1.AbstractTransactionInvoiceCommentActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionInvoiceCommentActive.attributeTypeMap);
    }
}
exports.TransactionInvoiceCommentActive = TransactionInvoiceCommentActive;
TransactionInvoiceCommentActive.discriminator = undefined;
TransactionInvoiceCommentActive.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
