import { AbstractShopifySubscriptionProductUpdate } from "./AbstractShopifySubscriptionProductUpdate";
declare class ShopifySubscriptionProductCreate extends AbstractShopifySubscriptionProductUpdate {
    /**
    * The ID of the Shopify product that is enabled to be ordered as subscription.
    */
    'productId': string;
    /**
    *
    */
    'productVariantId': string;
    /**
    *
    */
    'shop': number;
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
export { ShopifySubscriptionProductCreate };
