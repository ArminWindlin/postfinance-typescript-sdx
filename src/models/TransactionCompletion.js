'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCompletion = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class TransactionCompletion extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionCompletion.attributeTypeMap);
    }
}
exports.TransactionCompletion = TransactionCompletion;
TransactionCompletion.discriminator = undefined;
TransactionCompletion.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "baseLineItems",
        "baseName": "baseLineItems",
        "type": "Array<LineItem>"
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
        "name": "invoiceMerchantReference",
        "baseName": "invoiceMerchantReference",
        "type": "string"
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
        "name": "lastCompletion",
        "baseName": "lastCompletion",
        "type": "boolean"
    },
    {
        "name": "lineItemVersion",
        "baseName": "lineItemVersion",
        "type": "TransactionLineItemVersion"
    },
    {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItem>"
    },
    {
        "name": "mode",
        "baseName": "mode",
        "type": "TransactionCompletionMode"
    },
    {
        "name": "nextUpdateOn",
        "baseName": "nextUpdateOn",
        "type": "Date"
    },
    {
        "name": "paymentInformation",
        "baseName": "paymentInformation",
        "type": "string"
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
        "name": "processorReference",
        "baseName": "processorReference",
        "type": "string"
    },
    {
        "name": "remainingLineItems",
        "baseName": "remainingLineItems",
        "type": "Array<LineItem>"
    },
    {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "TransactionCompletionState"
    },
    {
        "name": "statementDescriptor",
        "baseName": "statementDescriptor",
        "type": "string"
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
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
