'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestLanguage = void 0;
class RestLanguage {
    static getAttributeTypeMap() {
        return RestLanguage.attributeTypeMap;
    }
}
exports.RestLanguage = RestLanguage;
RestLanguage.discriminator = undefined;
RestLanguage.attributeTypeMap = [
    {
        "name": "countryCode",
        "baseName": "countryCode",
        "type": "string"
    },
    {
        "name": "ietfCode",
        "baseName": "ietfCode",
        "type": "string"
    },
    {
        "name": "iso2Code",
        "baseName": "iso2Code",
        "type": "string"
    },
    {
        "name": "iso3Code",
        "baseName": "iso3Code",
        "type": "string"
    },
    {
        "name": "pluralExpression",
        "baseName": "pluralExpression",
        "type": "string"
    },
    {
        "name": "primaryOfGroup",
        "baseName": "primaryOfGroup",
        "type": "boolean"
    }
];
