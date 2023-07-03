declare class ShopifySubscriberCreation {
    /**
    *
    */
    'emailAddress'?: string;
    /**
    *
    */
    'phoneNumber'?: string;
    /**
    * The customer ID has to correspond to the ID assigned to the customer by Shopify. When the subscriber already exists no new subscriber will be created.
    */
    'shopifyCustomerId': string;
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
export { ShopifySubscriberCreation };
