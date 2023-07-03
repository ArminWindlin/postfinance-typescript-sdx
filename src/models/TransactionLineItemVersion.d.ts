import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { LineItem } from "./LineItem";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
import { TransactionLineItemVersionState } from "./TransactionLineItemVersionState";
declare class TransactionLineItemVersion extends TransactionAwareEntity {
    /**
    *
    */
    'amount'?: number;
    /**
    *
    */
    'createdBy'?: number;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
    */
    'externalId'?: string;
    /**
    *
    */
    'failedOn'?: Date;
    /**
    *
    */
    'failureReason'?: FailureReason;
    /**
    *
    */
    'labels'?: Array<Label>;
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
    'nextUpdateOn'?: Date;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'processingOn'?: Date;
    /**
    *
    */
    'spaceViewId'?: number;
    /**
    *
    */
    'state'?: TransactionLineItemVersionState;
    /**
    *
    */
    'succeededOn'?: Date;
    /**
    *
    */
    'taxAmount'?: number;
    /**
    *
    */
    'timeoutOn'?: Date;
    /**
    *
    */
    'transaction'?: Transaction;
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
        baseName: string; /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
        type: string;
    }[];
}
export { TransactionLineItemVersion };
