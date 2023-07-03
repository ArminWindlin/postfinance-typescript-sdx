'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdjustmentType = void 0;
class PaymentAdjustmentType {
    static getAttributeTypeMap() {
        return PaymentAdjustmentType.attributeTypeMap;
    }
}
exports.PaymentAdjustmentType = PaymentAdjustmentType;
PaymentAdjustmentType.discriminator = undefined;
PaymentAdjustmentType.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    }
];
