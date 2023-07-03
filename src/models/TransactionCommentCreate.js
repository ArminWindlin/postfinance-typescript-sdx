'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCommentCreate = void 0;
const AbstractTransactionCommentActive_1 = require("./AbstractTransactionCommentActive");
class TransactionCommentCreate extends AbstractTransactionCommentActive_1.AbstractTransactionCommentActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionCommentCreate.attributeTypeMap);
    }
}
exports.TransactionCommentCreate = TransactionCommentCreate;
TransactionCommentCreate.discriminator = undefined;
TransactionCommentCreate.attributeTypeMap = [
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "number"
    }
];
