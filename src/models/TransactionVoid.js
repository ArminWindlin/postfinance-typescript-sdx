'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionVoid = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class TransactionVoid extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionVoid.attributeTypeMap);
    }
}
exports.TransactionVoid = TransactionVoid;
TransactionVoid.discriminator = undefined;
TransactionVoid.attributeTypeMap = [
    {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "number"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "failedOn",
        "baseName": "failedOn",
        "type": "Date"
    },
    {
        "name": "failureReason",
        "baseName": "failureReason",
        "type": "FailureReason"
    },
    {
        "name": "labels",
        "baseName": "labels",
        "type": "Array<Label>"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "mode",
        "baseName": "mode",
        "type": "TransactionVoidMode"
    },
    {
        "name": "nextUpdateOn",
        "baseName": "nextUpdateOn",
        "type": "Date"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "processorReference",
        "baseName": "processorReference",
        "type": "string"
    },
    {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "TransactionVoidState"
    },
    {
        "name": "succeededOn",
        "baseName": "succeededOn",
        "type": "Date"
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
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
