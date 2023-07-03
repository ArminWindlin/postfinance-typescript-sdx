'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionInvoiceComment = void 0;
class TransactionInvoiceComment {
    static getAttributeTypeMap() {
        return TransactionInvoiceComment.attributeTypeMap;
    }
}
exports.TransactionInvoiceComment = TransactionInvoiceComment;
TransactionInvoiceComment.discriminator = undefined;
TransactionInvoiceComment.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "number"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "editedBy",
        "baseName": "editedBy",
        "type": "number"
    },
    {
        "name": "editedOn",
        "baseName": "editedOn",
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
        "name": "pinned",
        "baseName": "pinned",
        "type": "boolean"
    },
    {
        "name": "transactionInvoice",
        "baseName": "transactionInvoice",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
