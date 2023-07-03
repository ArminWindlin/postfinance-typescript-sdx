declare class CompletionLineItemCreate {
    /**
    * The total amount of the line item including any tax.
    */
    'amount': number;
    /**
    * The quantity of the line item which should be completed.
    */
    'quantity': number;
    /**
    * The unique id identifies the line item on which the capture is applied on.
    */
    'uniqueId': string;
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
export { CompletionLineItemCreate };
