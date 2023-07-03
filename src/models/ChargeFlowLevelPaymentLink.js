'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeFlowLevelPaymentLink = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class ChargeFlowLevelPaymentLink extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChargeFlowLevelPaymentLink.attributeTypeMap);
    }
}
exports.ChargeFlowLevelPaymentLink = ChargeFlowLevelPaymentLink;
ChargeFlowLevelPaymentLink.discriminator = undefined;
ChargeFlowLevelPaymentLink.attributeTypeMap = [
    {
        "name": "chargeFlowLevel",
        "baseName": "chargeFlowLevel",
        "type": "ChargeFlowLevel"
    },
    {
        "name": "paymentLink",
        "baseName": "paymentLink",
        "type": "string"
    }
];
