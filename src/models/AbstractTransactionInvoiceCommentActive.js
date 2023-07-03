'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTransactionInvoiceCommentActive = void 0;
class AbstractTransactionInvoiceCommentActive {
    static getAttributeTypeMap() {
        return AbstractTransactionInvoiceCommentActive.attributeTypeMap;
    }
}
exports.AbstractTransactionInvoiceCommentActive = AbstractTransactionInvoiceCommentActive;
AbstractTransactionInvoiceCommentActive.discriminator = undefined;
AbstractTransactionInvoiceCommentActive.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    }
];
