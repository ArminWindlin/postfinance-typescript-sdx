'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceReconciliationRecordInvoiceLink = void 0;
class InvoiceReconciliationRecordInvoiceLink {
    static getAttributeTypeMap() {
        return InvoiceReconciliationRecordInvoiceLink.attributeTypeMap;
    }
}
exports.InvoiceReconciliationRecordInvoiceLink = InvoiceReconciliationRecordInvoiceLink;
InvoiceReconciliationRecordInvoiceLink.discriminator = undefined;
InvoiceReconciliationRecordInvoiceLink.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "invoice",
        "baseName": "invoice",
        "type": "TransactionInvoice"
    },
    {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
    },
    {
        "name": "record",
        "baseName": "record",
        "type": "InvoiceReconciliationRecord"
    }
];
