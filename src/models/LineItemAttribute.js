'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemAttribute = void 0;
class LineItemAttribute {
    static getAttributeTypeMap() {
        return LineItemAttribute.attributeTypeMap;
    }
}
exports.LineItemAttribute = LineItemAttribute;
LineItemAttribute.discriminator = undefined;
LineItemAttribute.attributeTypeMap = [
    {
        "name": "label",
        "baseName": "label",
        "type": "string"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    }
];
