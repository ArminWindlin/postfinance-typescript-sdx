import { ChargeAttemptEnvironment } from "./ChargeAttemptEnvironment";
import { FailureReason } from "./FailureReason";
import { InvoiceReconciliationRecordRejectionStatus } from "./InvoiceReconciliationRecordRejectionStatus";
import { InvoiceReconciliationRecordState } from "./InvoiceReconciliationRecordState";
import { InvoiceReconciliationRecordType } from "./InvoiceReconciliationRecordType";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
declare class InvoiceReconciliationRecord extends TransactionAwareEntity {
    /**
    *
    */
    'address'?: string;
    /**
    *
    */
    'amount'?: number;
    /**
    *
    */
    'city'?: string;
    /**
    *
    */
    'country'?: string;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    *
    */
    'currency'?: string;
    /**
    *
    */
    'discardedBy'?: number;
    /**
    * The discarded on date indicates when the bank transaction has been discarded.
    */
    'discardedOn'?: Date;
    /**
    *
    */
    'environment'?: ChargeAttemptEnvironment;
    /**
    *
    */
    'familyName'?: string;
    /**
    *
    */
    'givenName'?: string;
    /**
    *
    */
    'iban'?: string;
    /**
    *
    */
    'lastResolutionFailure'?: FailureReason;
    /**
    *
    */
    'participantNumber'?: string;
    /**
    *
    */
    'paymentFeeAmount'?: number;
    /**
    *
    */
    'paymentFeeCurrency'?: string;
    /**
    *
    */
    'paymentReason'?: string;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'postCode'?: string;
    /**
    *
    */
    'referenceNumber'?: string;
    /**
    *
    */
    'rejectionStatus'?: InvoiceReconciliationRecordRejectionStatus;
    /**
    *
    */
    'resolvedBy'?: number;
    /**
    * The resolved on date indicates when the bank transaction has been resolved.
    */
    'resolvedOn'?: Date;
    /**
    *
    */
    'senderBankAccount'?: string;
    /**
    *
    */
    'state'?: InvoiceReconciliationRecordState;
    /**
    *
    */
    'street'?: string;
    /**
    *
    */
    'type'?: InvoiceReconciliationRecordType;
    /**
    *
    */
    'uniqueId'?: string;
    /**
    *
    */
    'valueDate'?: Date;
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
export { InvoiceReconciliationRecord };
