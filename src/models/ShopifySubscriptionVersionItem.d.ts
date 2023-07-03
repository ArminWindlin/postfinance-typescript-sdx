import { ShopifySubscriptionVersionItemPriceStrategy } from "./ShopifySubscriptionVersionItemPriceStrategy";
import { ShopifyTaxLine } from "./ShopifyTaxLine";
declare class ShopifySubscriptionVersionItem {
    /**
    *
    */
    'priceIncludingTax'?: number;
    /**
    *
    */
    'priceStrategy'?: ShopifySubscriptionVersionItemPriceStrategy;
    /**
    *
    */
    'product'?: number;
    /**
    *
    */
    'quantity'?: number;
    /**
    *
    */
    'taxLines'?: Array<ShopifyTaxLine>;
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
export { ShopifySubscriptionVersionItem };
