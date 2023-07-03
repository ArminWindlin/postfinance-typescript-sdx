'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualTaskType = void 0;
class ManualTaskType {
    static getAttributeTypeMap() {
        return ManualTaskType.attributeTypeMap;
    }
}
exports.ManualTaskType = ManualTaskType;
ManualTaskType.discriminator = undefined;
ManualTaskType.attributeTypeMap = [
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
