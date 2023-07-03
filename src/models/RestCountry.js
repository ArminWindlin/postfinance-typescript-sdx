'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestCountry = void 0;
class RestCountry {
    static getAttributeTypeMap() {
        return RestCountry.attributeTypeMap;
    }
}
exports.RestCountry = RestCountry;
RestCountry.discriminator = undefined;
RestCountry.attributeTypeMap = [
    {
        "name": "iSOCode2Letter",
        "baseName": "ISOCode2Letter",
        "type": "string"
    },
    {
        "name": "iSOCode3Letter",
        "baseName": "ISOCode3Letter",
        "type": "string"
    },
    {
        "name": "addressFormat",
        "baseName": "addressFormat",
        "type": "RestAddressFormat"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "numericCode",
        "baseName": "numericCode",
        "type": "string"
    },
    {
        "name": "stateCodes",
        "baseName": "stateCodes",
        "type": "Array<string>"
    }
];
