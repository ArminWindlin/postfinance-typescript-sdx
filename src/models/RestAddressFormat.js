'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestAddressFormat = void 0;
class RestAddressFormat {
    static getAttributeTypeMap() {
        return RestAddressFormat.attributeTypeMap;
    }
}
exports.RestAddressFormat = RestAddressFormat;
RestAddressFormat.discriminator = undefined;
RestAddressFormat.attributeTypeMap = [
    {
        "name": "postCodeExamples",
        "baseName": "postCodeExamples",
        "type": "Array<string>"
    },
    {
        "name": "postCodeRegex",
        "baseName": "postCodeRegex",
        "type": "string"
    },
    {
        "name": "requiredFields",
        "baseName": "requiredFields",
        "type": "Array<RestAddressFormatField>"
    },
    {
        "name": "usedFields",
        "baseName": "usedFields",
        "type": "Array<RestAddressFormatField>"
    }
];
