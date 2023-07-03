'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Charge = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class Charge extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Charge.attributeTypeMap);
    }
}
exports.Charge = Charge;
Charge.discriminator = undefined;
Charge.attributeTypeMap = [
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "failureReason",
        "baseName": "failureReason",
        "type": "FailureReason"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "ChargeState"
    },
    {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
    },
    {
        "name": "timeoutOn",
        "baseName": "timeoutOn",
        "type": "Date"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ChargeType"
    },
    {
        "name": "userFailureMessage",
        "baseName": "userFailureMessage",
        "type": "string"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
