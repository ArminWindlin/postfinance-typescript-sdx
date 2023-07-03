declare class ShopifySubscriptionModelTaxLine {
    /**
    *
    */
    'rate'?: number;
    /**
    *
    */
    'title'?: string;
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
export { ShopifySubscriptionModelTaxLine };
