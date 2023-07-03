'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax = void 0;
class Tax {
    static getAttributeTypeMap() {
        return Tax.attributeTypeMap;
    }
}
exports.Tax = Tax;
Tax.discriminator = undefined;
Tax.attributeTypeMap = [
    {
        "name": "rate",
        "baseName": "rate",
        "type": "number"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
