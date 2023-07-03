'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundCommentCreate = void 0;
const AbstractRefundCommentActive_1 = require("./AbstractRefundCommentActive");
class RefundCommentCreate extends AbstractRefundCommentActive_1.AbstractRefundCommentActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RefundCommentCreate.attributeTypeMap);
    }
}
exports.RefundCommentCreate = RefundCommentCreate;
RefundCommentCreate.discriminator = undefined;
RefundCommentCreate.attributeTypeMap = [
    {
        "name": "refund",
        "baseName": "refund",
        "type": "number"
    }
];
