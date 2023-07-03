'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseTranslatedString = void 0;
class DatabaseTranslatedString {
    static getAttributeTypeMap() {
        return DatabaseTranslatedString.attributeTypeMap;
    }
}
exports.DatabaseTranslatedString = DatabaseTranslatedString;
DatabaseTranslatedString.discriminator = undefined;
DatabaseTranslatedString.attributeTypeMap = [
    {
        "name": "availableLanguages",
        "baseName": "availableLanguages",
        "type": "Array<string>"
    },
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<DatabaseTranslatedStringItem>"
    }
];
