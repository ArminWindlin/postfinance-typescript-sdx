import { BankTransactionFlowDirection } from "./BankTransactionFlowDirection";
import { BankTransactionState } from "./BankTransactionState";
import { CurrencyBankAccount } from "./CurrencyBankAccount";
import { PaymentAdjustment } from "./PaymentAdjustment";
declare class BankTransaction {
    /**
    * The adjustments applied on this bank transaction.
    */
    'adjustments'?: Array<PaymentAdjustment>;
    /**
    * The created by indicates the user which has created the bank transaction.
    */
    'createdBy'?: number;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    * The currency bank account which is used to handle money flow.
    */
    'currencyBankAccount'?: CurrencyBankAccount;
    /**
    *
    */
    'externalId'?: string;
    /**
    *
    */
    'flowDirection'?: BankTransactionFlowDirection;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    * The posting amount indicates the amount including adjustments.
    */
    'postingAmount'?: number;
    /**
    *
    */
    'reference'?: string;
    /**
    *
    */
    'source'?: number;
    /**
    *
    */
    'state'?: BankTransactionState;
    /**
    *
    */
    'totalAdjustmentAmountIncludingTax'?: number;
    /**
    *
    */
    'type'?: number;
    /**
    *
    */
    'valueAmount'?: number;
    /**
    * The value date describes the date the amount is effective on the account.
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
export { BankTransaction };
