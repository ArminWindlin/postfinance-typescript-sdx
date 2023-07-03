'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTemplateType = void 0;
class DocumentTemplateType {
    static getAttributeTypeMap() {
        return DocumentTemplateType.attributeTypeMap;
    }
}
exports.DocumentTemplateType = DocumentTemplateType;
DocumentTemplateType.discriminator = undefined;
DocumentTemplateType.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "feature",
        "baseName": "feature",
        "type": "number"
    },
    {
        "name": "group",
        "baseName": "group",
        "type": "DocumentTemplateTypeGroup"
    },
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
