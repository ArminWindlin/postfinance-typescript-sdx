'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceReconciliationRecord = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class InvoiceReconciliationRecord extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InvoiceReconciliationRecord.attributeTypeMap);
    }
}
exports.InvoiceReconciliationRecord = InvoiceReconciliationRecord;
InvoiceReconciliationRecord.discriminator = undefined;
InvoiceReconciliationRecord.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "discardedBy",
        "baseName": "discardedBy",
        "type": "number"
    },
    {
        "name": "discardedOn",
        "baseName": "discardedOn",
        "type": "Date"
    },
    {
        "name": "environment",
        "baseName": "environment",
        "type": "ChargeAttemptEnvironment"
    },
    {
        "name": "familyName",
        "baseName": "familyName",
        "type": "string"
    },
    {
        "name": "givenName",
        "baseName": "givenName",
        "type": "string"
    },
    {
        "name": "iban",
        "baseName": "iban",
        "type": "string"
    },
    {
        "name": "lastResolutionFailure",
        "baseName": "lastResolutionFailure",
        "type": "FailureReason"
    },
    {
        "name": "participantNumber",
        "baseName": "participantNumber",
        "type": "string"
    },
    {
        "name": "paymentFeeAmount",
        "baseName": "paymentFeeAmount",
        "type": "number"
    },
    {
        "name": "paymentFeeCurrency",
        "baseName": "paymentFeeCurrency",
        "type": "string"
    },
    {
        "name": "paymentReason",
        "baseName": "paymentReason",
        "type": "string"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "postCode",
        "baseName": "postCode",
        "type": "string"
    },
    {
        "name": "referenceNumber",
        "baseName": "referenceNumber",
        "type": "string"
    },
    {
        "name": "rejectionStatus",
        "baseName": "rejectionStatus",
        "type": "InvoiceReconciliationRecordRejectionStatus"
    },
    {
        "name": "resolvedBy",
        "baseName": "resolvedBy",
        "type": "number"
    },
    {
        "name": "resolvedOn",
        "baseName": "resolvedOn",
        "type": "Date"
    },
    {
        "name": "senderBankAccount",
        "baseName": "senderBankAccount",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "InvoiceReconciliationRecordState"
    },
    {
        "name": "street",
        "baseName": "street",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "InvoiceReconciliationRecordType"
    },
    {
        "name": "uniqueId",
        "baseName": "uniqueId",
        "type": "string"
    },
    {
        "name": "valueDate",
        "baseName": "valueDate",
        "type": "Date"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
