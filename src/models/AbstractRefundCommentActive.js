'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRefundCommentActive = void 0;
class AbstractRefundCommentActive {
    static getAttributeTypeMap() {
        return AbstractRefundCommentActive.attributeTypeMap;
    }
}
exports.AbstractRefundCommentActive = AbstractRefundCommentActive;
AbstractRefundCommentActive.discriminator = undefined;
AbstractRefundCommentActive.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    }
];
