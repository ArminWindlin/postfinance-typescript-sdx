import { ShopifySubscriptionBillingIntervalUnit } from "./ShopifySubscriptionBillingIntervalUnit";
import { ShopifySubscriptionProductPricingOption } from "./ShopifySubscriptionProductPricingOption";
import { ShopifySubscriptionWeekday } from "./ShopifySubscriptionWeekday";
declare class AbstractShopifySubscriptionProductUpdate {
    /**
    *
    */
    'absolutePriceAdjustment'?: number;
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
    * Define the weekday on which the recurring orders should be created.
    */
    'billingWeekday'?: ShopifySubscriptionWeekday;
    /**
    *
    */
    'fixedPrice'?: number;
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
    *
    */
    'pricingOption'?: ShopifySubscriptionProductPricingOption;
    /**
    *
    */
    'relativePriceAdjustment'?: number;
    /**
    * Define whether the order confirmation email of the Shopify shop is sent to the customer for recurring orders.
    */
    'storeOrderConfirmationEmailEnabled'?: boolean;
    /**
    * Define whether the customer is allowed to suspend subscriptions.
    */
    'subscriberSuspensionAllowed'?: boolean;
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
export { AbstractShopifySubscriptionProductUpdate };
