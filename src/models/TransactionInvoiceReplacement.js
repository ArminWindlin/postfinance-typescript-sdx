'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionInvoiceReplacement = void 0;
class TransactionInvoiceReplacement {
    static getAttributeTypeMap() {
        return TransactionInvoiceReplacement.attributeTypeMap;
    }
}
exports.TransactionInvoiceReplacement = TransactionInvoiceReplacement;
TransactionInvoiceReplacement.discriminator = undefined;
TransactionInvoiceReplacement.attributeTypeMap = [
    {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "AddressCreate"
    },
    {
        "name": "dueOn",
        "baseName": "dueOn",
        "type": "Date"
    },
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
    },
    {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItemCreate>"
    },
    {
        "name": "merchantReference",
        "baseName": "merchantReference",
        "type": "string"
    },
    {
        "name": "sentToCustomer",
        "baseName": "sentToCustomer",
        "type": "boolean"
    }
];
