import { ShopifyIntegration } from "./ShopifyIntegration";
import { ShopifyTransactionState } from "./ShopifyTransactionState";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
declare class ShopifyTransaction extends TransactionAwareEntity {
    /**
    *
    */
    'checkoutId'?: string;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    *
    */
    'integration'?: ShopifyIntegration;
    /**
    *
    */
    'orderId'?: string;
    /**
    *
    */
    'orderName'?: string;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'state'?: ShopifyTransactionState;
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
        /**
        *
        */
        type: string;
    }[];
}
export { ShopifyTransaction };
