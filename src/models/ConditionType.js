'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionType = void 0;
class ConditionType {
    static getAttributeTypeMap() {
        return ConditionType.attributeTypeMap;
    }
}
exports.ConditionType = ConditionType;
ConditionType.discriminator = undefined;
ConditionType.attributeTypeMap = [
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
