import { BankTransaction } from "./BankTransaction";
import { LineItem } from "./LineItem";
import { Refund } from "./Refund";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
declare class RefundRecoveryBankTransaction extends TransactionAwareEntity {
    /**
    *
    */
    'bankTransaction'?: BankTransaction;
    /**
    *
    */
    'language'?: string;
    /**
    * The line items contain the items which could be recovered.
    */
    'lineItems'?: Array<LineItem>;
    /**
    *
    */
    'refund'?: Refund;
    /**
    * Specify the posting amount in the refund's currency.
    */
    'refundCurrencyAmount'?: number;
    /**
    *
    */
    'refundCurrencyValueAmount'?: number;
    /**
    *
    */
    'spaceViewId'?: number;
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
export { RefundRecoveryBankTransaction };
