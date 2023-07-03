'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseTranslatedStringItem = void 0;
class DatabaseTranslatedStringItem {
    static getAttributeTypeMap() {
        return DatabaseTranslatedStringItem.attributeTypeMap;
    }
}
exports.DatabaseTranslatedStringItem = DatabaseTranslatedStringItem;
DatabaseTranslatedStringItem.discriminator = undefined;
DatabaseTranslatedStringItem.attributeTypeMap = [
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "languageCode",
        "baseName": "languageCode",
        "type": "string"
    },
    {
        "name": "translation",
        "baseName": "translation",
        "type": "string"
    }
];
