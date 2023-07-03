import { BankTransaction } from "./BankTransaction";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
declare class ChargeBankTransaction extends TransactionAwareEntity {
    /**
    *
    */
    'bankTransaction'?: BankTransaction;
    /**
    *
    */
    'completion'?: number;
    /**
    *
    */
    'language'?: string;
    /**
    *
    */
    'spaceViewId'?: number;
    /**
    *
    */
    'transaction'?: Transaction;
    /**
    * Specify the posting amount in the transaction's currency.
    */
    'transactionCurrencyAmount'?: number;
    /**
    *
    */
    'transactionCurrencyValueAmount'?: number;
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
export { ChargeBankTransaction };
