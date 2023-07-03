import { ShopifySubscriptionModelBillingConfiguration } from "./ShopifySubscriptionModelBillingConfiguration";
import { ShopifySubscriptionModelItem } from "./ShopifySubscriptionModelItem";
declare class ShopifySubscriptionUpdateRequest {
    /**
    *
    */
    'billingConfiguration'?: ShopifySubscriptionModelBillingConfiguration;
    /**
    *
    */
    'id'?: number;
    /**
    *
    */
    'items'?: Array<ShopifySubscriptionModelItem>;
    /**
    *
    */
    'storeOrderConfirmationEmailEnabled'?: boolean;
    /**
    *
    */
    'subscriberSuspensionAllowed'?: boolean;
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
export { ShopifySubscriptionUpdateRequest };
