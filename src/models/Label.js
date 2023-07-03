'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
class Label {
    static getAttributeTypeMap() {
        return Label.attributeTypeMap;
    }
}
exports.Label = Label;
Label.discriminator = undefined;
Label.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "any"
    },
    {
        "name": "contentAsString",
        "baseName": "contentAsString",
        "type": "string"
    },
    {
        "name": "descriptor",
        "baseName": "descriptor",
        "type": "LabelDescriptor"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
