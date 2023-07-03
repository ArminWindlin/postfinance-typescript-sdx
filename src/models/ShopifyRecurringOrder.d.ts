import { FailureReason } from "./FailureReason";
import { ShopifyRecurringOrderState } from "./ShopifyRecurringOrderState";
import { ShopifySubscriptionVersion } from "./ShopifySubscriptionVersion";
import { ShopifyTransaction } from "./ShopifyTransaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
declare class ShopifyRecurringOrder extends TransactionAwareEntity {
    /**
    *
    */
    'billedOn'?: Date;
    /**
    *
    */
    'checkoutToken'?: string;
    /**
    *
    */
    'createdOn'?: Date;
    /**
    *
    */
    'failureReason'?: FailureReason;
    /**
    *
    */
    'orderId'?: string;
    /**
    *
    */
    'orderName'?: string;
    /**
    *
    */
    'plannedExecutionDate'?: Date;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'recurrenceNumber'?: number;
    /**
    *
    */
    'shop'?: number;
    /**
    *
    */
    'startedProcessingOn'?: Date;
    /**
    *
    */
    'state'?: ShopifyRecurringOrderState;
    /**
    *
    */
    'subscriptionVersion'?: ShopifySubscriptionVersion;
    /**
    *
    */
    'transaction'?: ShopifyTransaction;
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
export { ShopifyRecurringOrder };
