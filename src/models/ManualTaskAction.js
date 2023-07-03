'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualTaskAction = void 0;
class ManualTaskAction {
    static getAttributeTypeMap() {
        return ManualTaskAction.attributeTypeMap;
    }
}
exports.ManualTaskAction = ManualTaskAction;
ManualTaskAction.discriminator = undefined;
ManualTaskAction.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "label",
        "baseName": "label",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "style",
        "baseName": "style",
        "type": "ManualTaskActionStyle"
    },
    {
        "name": "taskType",
        "baseName": "taskType",
        "type": "number"
    }
];
