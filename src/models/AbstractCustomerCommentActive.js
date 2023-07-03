'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCustomerCommentActive = void 0;
class AbstractCustomerCommentActive {
    static getAttributeTypeMap() {
        return AbstractCustomerCommentActive.attributeTypeMap;
    }
}
exports.AbstractCustomerCommentActive = AbstractCustomerCommentActive;
AbstractCustomerCommentActive.discriminator = undefined;
AbstractCustomerCommentActive.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    }
];
