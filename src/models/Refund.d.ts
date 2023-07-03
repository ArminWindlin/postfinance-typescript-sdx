import { Environment } from "./Environment";
import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { LineItem } from "./LineItem";
import { LineItemReduction } from "./LineItemReduction";
import { RefundState } from "./RefundState";
import { RefundType } from "./RefundType";
import { Tax } from "./Tax";
import { Transaction } from "./Transaction";
declare class Refund {
    /**
    *
    */
    'amount'?: number;
    /**
    *
    */
    'baseLineItems'?: Array<LineItem>;
    /**
    *
    */
    'completion'?: number;
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
    'environment'?: Environment;
    /**
    * The external id helps to identify duplicate calls to the refund service. As such the external ID has to be unique per transaction.
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
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
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
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
    /**
    *
    */
    'merchantReference'?: string;
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
    'processorReference'?: string;
    /**
    *
    */
    'reducedLineItems'?: Array<LineItem>;
    /**
    *
    */
    'reductions'?: Array<LineItemReduction>;
    /**
    *
    */
    'state'?: RefundState;
    /**
    *
    */
    'succeededOn'?: Date;
    /**
    *
    */
    'taxes'?: Array<Tax>;
    /**
    *
    */
    'timeZone'?: string;
    /**
    *
    */
    'timeoutOn'?: Date;
    /**
    * The total applied fees is the sum of all fees that have been applied so far.
    */
    'totalAppliedFees'?: number;
    /**
    * The total settled amount is the total amount which has been settled so far.
    */
    'totalSettledAmount'?: number;
    /**
    *
    */
    'transaction'?: Transaction;
    /**
    *
    */
    'type'?: RefundType;
    /**
    *
    */
    'updatedInvoice'?: number;
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
export { Refund };
