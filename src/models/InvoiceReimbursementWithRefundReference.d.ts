import { InvoiceReimbursement } from "./InvoiceReimbursement";
declare class InvoiceReimbursementWithRefundReference extends InvoiceReimbursement {
    /**
    *
    */
    'refundMerchantReference'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export { InvoiceReimbursementWithRefundReference };
