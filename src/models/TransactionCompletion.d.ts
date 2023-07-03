import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { LineItem } from "./LineItem";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
import { TransactionCompletionMode } from "./TransactionCompletionMode";
import { TransactionCompletionState } from "./TransactionCompletionState";
import { TransactionLineItemVersion } from "./TransactionLineItemVersion";
declare class TransactionCompletion extends TransactionAwareEntity {
    /**
    * The amount which is captured. The amount represents sum of line items including taxes.
    */
    'amount'?: number;
    /**
    * The base line items on which the completion is applied on.
    */
    'baseLineItems'?: Array<LineItem>;
    /**
    *
    */
    'createdBy'?: number;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    * The external ID helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
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
    'invoiceMerchantReference'?: string;
    /**
    *
    */
    'labels'?: Array<Label>;
    /**
    *
    */
    'language'?: string;
    /**
    * Indicates if this is the last completion. After the last completion is created the transaction cannot be completed anymore.
    */
    'lastCompletion'?: boolean;
    /**
    *
    */
    'lineItemVersion'?: TransactionLineItemVersion;
    /**
    * The line items which are captured.
    */
    'lineItems'?: Array<LineItem>;
    /**
    *
    */
    'mode'?: TransactionCompletionMode;
    /**
    *
    */
    'nextUpdateOn'?: Date;
    /**
    *
    */
    'paymentInformation'?: string;
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
    'remainingLineItems'?: Array<LineItem>;
    /**
    *
    */
    'spaceViewId'?: number;
    /**
    *
    */
    'state'?: TransactionCompletionState;
    /**
    * The statement descriptor explain charges or payments on bank statements.
    */
    'statementDescriptor'?: string;
    /**
    *
    */
    'succeededOn'?: Date;
    /**
    * The total sum of all taxes of line items.
    */
    'taxAmount'?: number;
    /**
    *
    */
    'timeZone'?: string;
    /**
    *
    */
    'timeoutOn'?: Date;
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
export { TransactionCompletion };
