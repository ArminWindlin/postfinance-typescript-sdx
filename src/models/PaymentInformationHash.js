'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentInformationHash = void 0;
class PaymentInformationHash {
    static getAttributeTypeMap() {
        return PaymentInformationHash.attributeTypeMap;
    }
}
exports.PaymentInformationHash = PaymentInformationHash;
PaymentInformationHash.discriminator = undefined;
PaymentInformationHash.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "PaymentInformationHashType"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    }
];
