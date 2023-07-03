declare class LineItemReduction {
    /**
    * The unique id identifies the line item on which the reduction is applied on.
    */
    'lineItemUniqueId'?: string;
    /**
    *
    */
    'quantityReduction'?: number;
    /**
    *
    */
    'unitPriceReduction'?: number;
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
export { LineItemReduction };
