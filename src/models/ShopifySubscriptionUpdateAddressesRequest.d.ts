import { ShopifySubscriptionAddressCreate } from "./ShopifySubscriptionAddressCreate";
declare class ShopifySubscriptionUpdateAddressesRequest {
    /**
    *
    */
    'billingAddress'?: ShopifySubscriptionAddressCreate;
    /**
    *
    */
    'id'?: number;
    /**
    *
    */
    'shippingAddress'?: ShopifySubscriptionAddressCreate;
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
export { ShopifySubscriptionUpdateAddressesRequest };
