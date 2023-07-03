import { ShopifySubscription } from "./ShopifySubscription";
import { ShopifySubscriptionAddress } from "./ShopifySubscriptionAddress";
import { ShopifySubscriptionBillingIntervalUnit } from "./ShopifySubscriptionBillingIntervalUnit";
import { ShopifySubscriptionVersionItem } from "./ShopifySubscriptionVersionItem";
import { ShopifySubscriptionVersionState } from "./ShopifySubscriptionVersionState";
import { ShopifySubscriptionWeekday } from "./ShopifySubscriptionWeekday";
declare class ShopifySubscriptionVersion {
    /**
    *
    */
    'billingAddress'?: ShopifySubscriptionAddress;
    /**
    *
    */
    'billingDayOfMonth'?: number;
    /**
    *
    */
    'billingIntervalAmount'?: number;
    /**
    *
    */
    'billingIntervalUnit'?: ShopifySubscriptionBillingIntervalUnit;
    /**
    *
    */
    'billingReferenceDate'?: Date;
    /**
    *
    */
    'billingWeekday'?: ShopifySubscriptionWeekday;
    /**
    *
    */
    'createdBy'?: number;
    /**
    *
    */
    'createdOn'?: Date;
    /**
    *
    */
    'currency'?: string;
    /**
    *
    */
    'dischargedBy'?: number;
    /**
    *
    */
    'dischargedOn'?: Date;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'items'?: Array<ShopifySubscriptionVersionItem>;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
    /**
    *
    */
    'maximalBillingCycles'?: number;
    /**
    *
    */
    'maximalSuspendableCycles'?: number;
    /**
    *
    */
    'minimalBillingCycles'?: number;
    /**
    *
    */
    'paymentGateway'?: string;
    /**
    *
    */
    'shippingAddress'?: ShopifySubscriptionAddress;
    /**
    *
    */
    'shippingRate'?: string;
    /**
    *
    */
    'shop'?: number;
    /**
    *
    */
    'state'?: ShopifySubscriptionVersionState;
    /**
    *
    */
    'storeOrderConfirmationEmailEnabled'?: boolean;
    /**
    *
    */
    'subscriberSuspensionAllowed'?: boolean;
    /**
    *
    */
    'subscription'?: ShopifySubscription;
    /**
    *
    */
    'terminationBillingCycles'?: number;
    /**
    *
    */
    'token'?: number;
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
export { ShopifySubscriptionVersion };
