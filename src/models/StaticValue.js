'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticValue = void 0;
class StaticValue {
    static getAttributeTypeMap() {
        return StaticValue.attributeTypeMap;
    }
}
exports.StaticValue = StaticValue;
StaticValue.discriminator = undefined;
StaticValue.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "features",
        "baseName": "features",
        "type": "Array<number>"
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
