'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionInvoice = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class TransactionInvoice extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionInvoice.attributeTypeMap);
    }
}
exports.TransactionInvoice = TransactionInvoice;
TransactionInvoice.discriminator = undefined;
TransactionInvoice.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "Address"
    },
    {
        "name": "completion",
        "baseName": "completion",
        "type": "TransactionCompletion"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "derecognizedBy",
        "baseName": "derecognizedBy",
        "type": "number"
    },
    {
        "name": "derecognizedOn",
        "baseName": "derecognizedOn",
        "type": "Date"
    },
    {
        "name": "dueOn",
        "baseName": "dueOn",
        "type": "Date"
    },
    {
        "name": "environment",
        "baseName": "environment",
        "type": "Environment"
    },
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
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
        "name": "merchantReference",
        "baseName": "merchantReference",
        "type": "string"
    },
    {
        "name": "outstandingAmount",
        "baseName": "outstandingAmount",
        "type": "number"
    },
    {
        "name": "paidOn",
        "baseName": "paidOn",
        "type": "Date"
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
        "type": "TransactionInvoiceState"
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
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
