import { ShopifySubscriberCreation } from "./ShopifySubscriberCreation";
import { ShopifySubscriptionAddressCreate } from "./ShopifySubscriptionAddressCreate";
import { ShopifySubscriptionModelBillingConfiguration } from "./ShopifySubscriptionModelBillingConfiguration";
import { ShopifySubscriptionModelItem } from "./ShopifySubscriptionModelItem";
declare class ShopifySubscriptionCreationRequest {
    /**
    *
    */
    'billingAddress': ShopifySubscriptionAddressCreate;
    /**
    *
    */
    'billingConfiguration'?: ShopifySubscriptionModelBillingConfiguration;
    /**
    *
    */
    'currency': string;
    /**
    * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
    */
    'externalId': string;
    /**
    *
    */
    'initialExecutionDate'?: Date;
    /**
    *
    */
    'integration': number;
    /**
    *
    */
    'items': Array<ShopifySubscriptionModelItem>;
    /**
    *
    */
    'language': string;
    /**
    *
    */
    'shippingAddress': ShopifySubscriptionAddressCreate;
    /**
    *
    */
    'shippingMethodName'?: string;
    /**
    *
    */
    'spaceViewId'?: number;
    /**
    *
    */
    'storeOrderConfirmationEmailEnabled'?: boolean;
    /**
    *
    */
    'subscriber': ShopifySubscriberCreation;
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
export { ShopifySubscriptionCreationRequest };
