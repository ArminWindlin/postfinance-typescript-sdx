'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelDescriptorGroup = void 0;
class LabelDescriptorGroup {
    static getAttributeTypeMap() {
        return LabelDescriptorGroup.attributeTypeMap;
    }
}
exports.LabelDescriptorGroup = LabelDescriptorGroup;
LabelDescriptorGroup.discriminator = undefined;
LabelDescriptorGroup.attributeTypeMap = [
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
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "number"
    }
];
