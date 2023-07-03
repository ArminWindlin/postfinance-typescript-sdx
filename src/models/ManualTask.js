'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualTask = void 0;
class ManualTask {
    static getAttributeTypeMap() {
        return ManualTask.attributeTypeMap;
    }
}
exports.ManualTask = ManualTask;
ManualTask.discriminator = undefined;
ManualTask.attributeTypeMap = [
    {
        "name": "actions",
        "baseName": "actions",
        "type": "Array<number>"
    },
    {
        "name": "contextEntityId",
        "baseName": "contextEntityId",
        "type": "number"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "expiresOn",
        "baseName": "expiresOn",
        "type": "Date"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "spaceId",
        "baseName": "spaceId",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "ManualTaskState"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "number"
    }
];
