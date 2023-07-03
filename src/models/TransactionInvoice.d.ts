import { Address } from "./Address";
import { Environment } from "./Environment";
import { LineItem } from "./LineItem";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
import { TransactionCompletion } from "./TransactionCompletion";
import { TransactionInvoiceState } from "./TransactionInvoiceState";
declare class TransactionInvoice extends TransactionAwareEntity {
    /**
    *
    */
    'amount'?: number;
    /**
    *
    */
    'billingAddress'?: Address;
    /**
    *
    */
    'completion'?: TransactionCompletion;
    /**
    * The date on which the invoice is created on.
    */
    'createdOn'?: Date;
    /**
    * The id of the user which marked the invoice as derecognized.
    */
    'derecognizedBy'?: number;
    /**
    * The date on which the invoice is marked as derecognized.
    */
    'derecognizedOn'?: Date;
    /**
    * The date on which the invoice should be paid on.
    */
    'dueOn'?: Date;
    /**
    *
    */
    'environment'?: Environment;
    /**
    * The external id helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
    */
    'externalId'?: string;
    /**
    *
    */
    'language'?: string;
    /**
    *
    */
    'lineItems'?: Array<LineItem>;
    /**
    *
    */
    'merchantReference'?: string;
    /**
    * The outstanding amount indicates how much the buyer owes the merchant. A negative amount indicates that the invoice is overpaid.
    */
    'outstandingAmount'?: number;
    /**
    * The date on which the invoice is marked as paid. Eventually this date lags behind of the actual paid date.
    */
    'paidOn'?: Date;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'spaceViewId'?: number;
    /**
    *
    */
    'state'?: TransactionInvoiceState;
    /**
    *
    */
    'taxAmount'?: number;
    /**
    *
    */
    'timeZone'?: string;
    /**
    * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
    */
    'version'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        /**
        *
        */
        type: string;
    }[];
}
export { TransactionInvoice };
