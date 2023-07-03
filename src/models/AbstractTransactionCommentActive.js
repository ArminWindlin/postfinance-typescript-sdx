'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTransactionCommentActive = void 0;
class AbstractTransactionCommentActive {
    static getAttributeTypeMap() {
        return AbstractTransactionCommentActive.attributeTypeMap;
    }
}
exports.AbstractTransactionCommentActive = AbstractTransactionCommentActive;
AbstractTransactionCommentActive.discriminator = undefined;
AbstractTransactionCommentActive.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    }
];
