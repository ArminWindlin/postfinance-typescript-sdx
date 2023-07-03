'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionLineItemVersion = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class TransactionLineItemVersion extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionLineItemVersion.attributeTypeMap);
    }
}
exports.TransactionLineItemVersion = TransactionLineItemVersion;
TransactionLineItemVersion.discriminator = undefined;
TransactionLineItemVersion.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
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
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
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
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItem>"
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
        "name": "processingOn",
        "baseName": "processingOn",
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
        "type": "TransactionLineItemVersionState"
    },
    {
        "name": "succeededOn",
        "baseName": "succeededOn",
        "type": "Date"
    },
    {
        "name": "taxAmount",
        "baseName": "taxAmount",
        "type": "number"
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
