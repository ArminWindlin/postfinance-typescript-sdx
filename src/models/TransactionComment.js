'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionComment = void 0;
class TransactionComment {
    static getAttributeTypeMap() {
        return TransactionComment.attributeTypeMap;
    }
}
exports.TransactionComment = TransactionComment;
TransactionComment.discriminator = undefined;
TransactionComment.attributeTypeMap = [
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
        "name": "transaction",
        "baseName": "transaction",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
