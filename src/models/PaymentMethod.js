'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = void 0;
class PaymentMethod {
    static getAttributeTypeMap() {
        return PaymentMethod.attributeTypeMap;
    }
}
exports.PaymentMethod = PaymentMethod;
PaymentMethod.discriminator = undefined;
PaymentMethod.attributeTypeMap = [
    {
        "name": "dataCollectionTypes",
        "baseName": "dataCollectionTypes",
        "type": "Array<DataCollectionType>"
    },
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
        "name": "imagePath",
        "baseName": "imagePath",
        "type": "string"
    },
    {
        "name": "merchantDescription",
        "baseName": "merchantDescription",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "supportedCurrencies",
        "baseName": "supportedCurrencies",
        "type": "Array<string>"
    }
];
