'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedString = void 0;
class LocalizedString {
    static getAttributeTypeMap() {
        return LocalizedString.attributeTypeMap;
    }
}
exports.LocalizedString = LocalizedString;
LocalizedString.discriminator = undefined;
LocalizedString.attributeTypeMap = [
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "string",
        "baseName": "string",
        "type": "string"
    }
];
