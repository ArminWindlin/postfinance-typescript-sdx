import { InvoiceReconciliationRecord } from "./InvoiceReconciliationRecord";
import { TransactionInvoice } from "./TransactionInvoice";
declare class InvoiceReconciliationRecordInvoiceLink {
    /**
    *
    */
    'amount'?: number;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'invoice'?: TransactionInvoice;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
    /**
    *
    */
    'record'?: InvoiceReconciliationRecord;
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
export { InvoiceReconciliationRecordInvoiceLink };
