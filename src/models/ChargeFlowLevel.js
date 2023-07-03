'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeFlowLevel = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class ChargeFlowLevel extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChargeFlowLevel.attributeTypeMap);
    }
}
exports.ChargeFlowLevel = ChargeFlowLevel;
ChargeFlowLevel.discriminator = undefined;
ChargeFlowLevel.attributeTypeMap = [
    {
        "name": "asynchronousCharge",
        "baseName": "asynchronousCharge",
        "type": "number"
    },
    {
        "name": "configuration",
        "baseName": "configuration",
        "type": "ChargeFlowLevelConfiguration"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "ChargeFlowLevelState"
    },
    {
        "name": "synchronousCharge",
        "baseName": "synchronousCharge",
        "type": "number"
    },
    {
        "name": "timeoutOn",
        "baseName": "timeoutOn",
        "type": "Date"
    },
    {
        "name": "tokenCharge",
        "baseName": "tokenCharge",
        "type": "number"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
