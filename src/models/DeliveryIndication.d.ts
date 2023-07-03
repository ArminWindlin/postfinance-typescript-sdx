import { DeliveryIndicationDecisionReason } from "./DeliveryIndicationDecisionReason";
import { DeliveryIndicationState } from "./DeliveryIndicationState";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
declare class DeliveryIndication extends TransactionAwareEntity {
    /**
    *
    */
    'automaticDecisionReason'?: DeliveryIndicationDecisionReason;
    /**
    *
    */
    'automaticallyDecidedOn'?: Date;
    /**
    *
    */
    'completion'?: number;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    *
    */
    'manualDecisionTimeoutOn'?: Date;
    /**
    *
    */
    'manuallyDecidedBy'?: number;
    /**
    *
    */
    'manuallyDecidedOn'?: Date;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'state'?: DeliveryIndicationState;
    /**
    *
    */
    'timeoutOn'?: Date;
    /**
    *
    */
    'transaction'?: Transaction;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string; /**
        *
        */
        type: string;
    }[];
}
export { DeliveryIndication };
