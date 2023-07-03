'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeFlow = void 0;
class ChargeFlow {
    static getAttributeTypeMap() {
        return ChargeFlow.attributeTypeMap;
    }
}
exports.ChargeFlow = ChargeFlow;
ChargeFlow.discriminator = undefined;
ChargeFlow.attributeTypeMap = [
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<number>"
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
        "name": "priority",
        "baseName": "priority",
        "type": "number"
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
