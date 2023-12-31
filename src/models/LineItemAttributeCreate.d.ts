declare class LineItemAttributeCreate {
    /**
    *
    */
    'label': string;
    /**
    *
    */
    'value': string;
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
export { LineItemAttributeCreate };
