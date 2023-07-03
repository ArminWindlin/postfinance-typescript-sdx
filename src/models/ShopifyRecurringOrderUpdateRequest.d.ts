declare class ShopifyRecurringOrderUpdateRequest {
    /**
    *
    */
    'executionDate'?: Date;
    /**
    *
    */
    'recurringOrderId'?: number;
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
export { ShopifyRecurringOrderUpdateRequest };
