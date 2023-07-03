import { ShopifySubscriptionBillingIntervalUnit } from "./ShopifySubscriptionBillingIntervalUnit";
import { ShopifySubscriptionWeekday } from "./ShopifySubscriptionWeekday";
declare class ShopifySubscriptionModelBillingConfiguration {
    /**
    * Define the day of the month on which the recurring orders should be created.
    */
    'billingDayOfMonth'?: number;
    /**
    *
    */
    'billingIntervalAmount'?: number;
    /**
    * Define how frequently recurring orders should be created.
    */
    'billingIntervalUnit'?: ShopifySubscriptionBillingIntervalUnit;
    /**
    * This date will be used as basis to calculate the dates of recurring orders.
    */
    'billingReferenceDate'?: Date;
    /**
    * Define the weekday on which the recurring orders should be created.
    */
    'billingWeekday'?: ShopifySubscriptionWeekday;
    /**
    * Define the maximum number of orders the subscription will run for.
    */
    'maximalBillingCycles'?: number;
    /**
    * Define the maximum number of orders the subscription can be suspended for at a time.
    */
    'maximalSuspendableCycles'?: number;
    /**
    * Define the minimal number of orders the subscription will run for.
    */
    'minimalBillingCycles'?: number;
    /**
    * Define the number of orders the subscription will keep running for after its termination has been requested.
    */
    'terminationBillingCycles'?: number;
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
export { ShopifySubscriptionModelBillingConfiguration };
