'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodBrand = void 0;
class PaymentMethodBrand {
    static getAttributeTypeMap() {
        return PaymentMethodBrand.attributeTypeMap;
    }
}
exports.PaymentMethodBrand = PaymentMethodBrand;
PaymentMethodBrand.discriminator = undefined;
PaymentMethodBrand.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "grayImagePath",
        "baseName": "grayImagePath",
        "type": "string"
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
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "number"
    }
];
