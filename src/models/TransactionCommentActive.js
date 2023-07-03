'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCommentActive = void 0;
const AbstractTransactionCommentActive_1 = require("./AbstractTransactionCommentActive");
class TransactionCommentActive extends AbstractTransactionCommentActive_1.AbstractTransactionCommentActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionCommentActive.attributeTypeMap);
    }
}
exports.TransactionCommentActive = TransactionCommentActive;
TransactionCommentActive.discriminator = undefined;
TransactionCommentActive.attributeTypeMap = [
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
