declare class LocalizedString {
    /**
    *
    */
    'displayName'?: string;
    /**
    *
    */
    'language'?: string;
    /**
    *
    */
    'string'?: string;
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
export { LocalizedString };
