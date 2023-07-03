'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceReconciliationRecordType = void 0;
class InvoiceReconciliationRecordType {
    static getAttributeTypeMap() {
        return InvoiceReconciliationRecordType.attributeTypeMap;
    }
}
exports.InvoiceReconciliationRecordType = InvoiceReconciliationRecordType;
InvoiceReconciliationRecordType.discriminator = undefined;
InvoiceReconciliationRecordType.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    }
];
