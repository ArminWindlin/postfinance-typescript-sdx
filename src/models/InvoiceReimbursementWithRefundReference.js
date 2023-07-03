'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceReimbursementWithRefundReference = void 0;
const InvoiceReimbursement_1 = require("./InvoiceReimbursement");
class InvoiceReimbursementWithRefundReference extends InvoiceReimbursement_1.InvoiceReimbursement {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InvoiceReimbursementWithRefundReference.attributeTypeMap);
    }
}
exports.InvoiceReimbursementWithRefundReference = InvoiceReimbursementWithRefundReference;
InvoiceReimbursementWithRefundReference.discriminator = undefined;
InvoiceReimbursementWithRefundReference.attributeTypeMap = [
    {
        "name": "refundMerchantReference",
        "baseName": "refundMerchantReference",
        "type": "string"
    }
];
