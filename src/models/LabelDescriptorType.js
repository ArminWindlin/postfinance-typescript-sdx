'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelDescriptorType = void 0;
class LabelDescriptorType {
    static getAttributeTypeMap() {
        return LabelDescriptorType.attributeTypeMap;
    }
}
exports.LabelDescriptorType = LabelDescriptorType;
LabelDescriptorType.discriminator = undefined;
LabelDescriptorType.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    }
];
