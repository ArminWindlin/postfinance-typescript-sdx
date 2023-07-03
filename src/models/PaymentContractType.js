'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentContractType = void 0;
class PaymentContractType {
    static getAttributeTypeMap() {
        return PaymentContractType.attributeTypeMap;
    }
}
exports.PaymentContractType = PaymentContractType;
PaymentContractType.discriminator = undefined;
PaymentContractType.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "feature",
        "baseName": "feature",
        "type": "Feature"
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
