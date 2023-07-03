'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdjustment = void 0;
class PaymentAdjustment {
    static getAttributeTypeMap() {
        return PaymentAdjustment.attributeTypeMap;
    }
}
exports.PaymentAdjustment = PaymentAdjustment;
PaymentAdjustment.discriminator = undefined;
PaymentAdjustment.attributeTypeMap = [
    {
        "name": "amountExcludingTax",
        "baseName": "amountExcludingTax",
        "type": "number"
    },
    {
        "name": "amountIncludingTax",
        "baseName": "amountIncludingTax",
        "type": "number"
    },
    {
        "name": "rateInPercentage",
        "baseName": "rateInPercentage",
        "type": "number"
    },
    {
        "name": "tax",
        "baseName": "tax",
        "type": "Tax"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "number"
    }
];
