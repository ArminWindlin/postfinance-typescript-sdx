'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTemplateTypeGroup = void 0;
class DocumentTemplateTypeGroup {
    static getAttributeTypeMap() {
        return DocumentTemplateTypeGroup.attributeTypeMap;
    }
}
exports.DocumentTemplateTypeGroup = DocumentTemplateTypeGroup;
DocumentTemplateTypeGroup.discriminator = undefined;
DocumentTemplateTypeGroup.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "{ [key: string]: string; }"
    }
];
