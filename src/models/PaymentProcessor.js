'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessor = void 0;
class PaymentProcessor {
    static getAttributeTypeMap() {
        return PaymentProcessor.attributeTypeMap;
    }
}
exports.PaymentProcessor = PaymentProcessor;
PaymentProcessor.discriminator = undefined;
PaymentProcessor.attributeTypeMap = [
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "feature",
        "baseName": "feature",
        "type": "number"
    },
    {
        "name": "headquartersLocation",
        "baseName": "headquartersLocation",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "logoPath",
        "baseName": "logoPath",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "productName",
        "baseName": "productName",
        "type": "{ [key: string]: string; }"
    }
];
