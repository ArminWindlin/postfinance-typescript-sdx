import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
import { TransactionVoidMode } from "./TransactionVoidMode";
import { TransactionVoidState } from "./TransactionVoidState";
declare class TransactionVoid extends TransactionAwareEntity {
    /**
    *
    */
    'createdBy'?: number;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
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
    'mode'?: TransactionVoidMode;
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
    'processorReference'?: string;
    /**
    *
    */
    'spaceViewId'?: number;
    /**
    *
    */
    'state'?: TransactionVoidState;
    /**
    *
    */
    'succeededOn'?: Date;
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
        baseName: string;
        type: string;
    }[];
}
export { TransactionVoid };
