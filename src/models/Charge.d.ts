import { ChargeState } from "./ChargeState";
import { ChargeType } from "./ChargeType";
import { FailureReason } from "./FailureReason";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
declare class Charge extends TransactionAwareEntity {
    /**
    * The date on which the charge was created on.
    */
    'createdOn'?: Date;
    /**
    *
    */
    'failureReason'?: FailureReason;
    /**
    *
    */
    'language'?: string;
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
    'state'?: ChargeState;
    /**
    *
    */
    'timeZone'?: string;
    /**
    *
    */
    'timeoutOn'?: Date;
    /**
    *
    */
    'transaction'?: Transaction;
    /**
    *
    */
    'type'?: ChargeType;
    /**
    * The failure message describes for an end user why the charge is failed in the language of the user. This is only provided when the charge is marked as failed.
    */
    'userFailureMessage'?: string;
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
export { Charge };
