import { ShopifySubscriptionModelTaxLine } from "./ShopifySubscriptionModelTaxLine";
declare class ShopifySubscriptionModelItem {
    /**
    *
    */
    'priceIncludingTax'?: number;
    /**
    *
    */
    'productId'?: number;
    /**
    *
    */
    'quantity'?: number;
    /**
    *
    */
    'recalculatePrice'?: boolean;
    /**
    *
    */
    'taxLines'?: Array<ShopifySubscriptionModelTaxLine>;
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
export { ShopifySubscriptionModelItem };
