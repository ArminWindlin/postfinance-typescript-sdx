'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Condition = void 0;
class Condition {
    static getAttributeTypeMap() {
        return Condition.attributeTypeMap;
    }
}
exports.Condition = Condition;
Condition.discriminator = undefined;
Condition.attributeTypeMap = [
    {
        "name": "conditionType",
        "baseName": "conditionType",
        "type": "number"
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
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
