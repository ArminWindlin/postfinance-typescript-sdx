'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemAttributeCreate = void 0;
class LineItemAttributeCreate {
    static getAttributeTypeMap() {
        return LineItemAttributeCreate.attributeTypeMap;
    }
}
exports.LineItemAttributeCreate = LineItemAttributeCreate;
LineItemAttributeCreate.discriminator = undefined;
LineItemAttributeCreate.attributeTypeMap = [
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
