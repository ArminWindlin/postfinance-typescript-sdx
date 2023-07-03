'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestCurrency = void 0;
class RestCurrency {
    static getAttributeTypeMap() {
        return RestCurrency.attributeTypeMap;
    }
}
exports.RestCurrency = RestCurrency;
RestCurrency.discriminator = undefined;
RestCurrency.attributeTypeMap = [
    {
        "name": "currencyCode",
        "baseName": "currencyCode",
        "type": "string"
    },
    {
        "name": "fractionDigits",
        "baseName": "fractionDigits",
        "type": "number"
    },
    {
        "name": "numericCode",
        "baseName": "numericCode",
        "type": "number"
    }
];
