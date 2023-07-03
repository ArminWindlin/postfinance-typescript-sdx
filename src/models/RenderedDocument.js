'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderedDocument = void 0;
class RenderedDocument {
    static getAttributeTypeMap() {
        return RenderedDocument.attributeTypeMap;
    }
}
exports.RenderedDocument = RenderedDocument;
RenderedDocument.discriminator = undefined;
RenderedDocument.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<string>"
    },
    {
        "name": "documentTemplateType",
        "baseName": "documentTemplateType",
        "type": "number"
    },
    {
        "name": "mimeType",
        "baseName": "mimeType",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
