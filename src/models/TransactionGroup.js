'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionGroup = void 0;
class TransactionGroup {
    static getAttributeTypeMap() {
        return TransactionGroup.attributeTypeMap;
    }
}
exports.TransactionGroup = TransactionGroup;
TransactionGroup.discriminator = undefined;
TransactionGroup.attributeTypeMap = [
    {
        "name": "beginDate",
        "baseName": "beginDate",
        "type": "Date"
    },
    {
        "name": "customerId",
        "baseName": "customerId",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
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
        "name": "state",
        "baseName": "state",
        "type": "TransactionGroupState"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
