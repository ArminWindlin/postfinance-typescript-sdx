'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundCommentActive = void 0;
const AbstractRefundCommentActive_1 = require("./AbstractRefundCommentActive");
class RefundCommentActive extends AbstractRefundCommentActive_1.AbstractRefundCommentActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RefundCommentActive.attributeTypeMap);
    }
}
exports.RefundCommentActive = RefundCommentActive;
RefundCommentActive.discriminator = undefined;
RefundCommentActive.attributeTypeMap = [
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
