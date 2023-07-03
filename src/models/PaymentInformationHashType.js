'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentInformationHashType = void 0;
class PaymentInformationHashType {
    static getAttributeTypeMap() {
        return PaymentInformationHashType.attributeTypeMap;
    }
}
exports.PaymentInformationHashType = PaymentInformationHashType;
PaymentInformationHashType.discriminator = undefined;
PaymentInformationHashType.attributeTypeMap = [
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
