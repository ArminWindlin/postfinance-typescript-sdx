import { AbstractTransactionInvoiceCommentActive } from "./AbstractTransactionInvoiceCommentActive";
declare class TransactionInvoiceCommentCreate extends AbstractTransactionInvoiceCommentActive {
    /**
    *
    */
    'transactionInvoice': number;
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
export { TransactionInvoiceCommentCreate };
