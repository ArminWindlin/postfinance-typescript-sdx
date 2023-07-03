declare class DatabaseTranslatedStringItem {
    /**
    *
    */
    'language'?: string;
    /**
    *
    */
    'languageCode'?: string;
    /**
    *
    */
    'translation'?: string;
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
export { DatabaseTranslatedStringItem };
