declare class RestLanguage {
    /**
    * The country code represents the region of the language as a 2 letter ISO code.
    */
    'countryCode'?: string;
    /**
    * The IETF code represents the language as the two letter ISO code including the region (e.g. en-US).
    */
    'ietfCode'?: string;
    /**
    * The ISO 2 letter code represents the language with two letters.
    */
    'iso2Code'?: string;
    /**
    * The ISO 3 letter code represents the language with three letters.
    */
    'iso3Code'?: string;
    /**
    * The plural expression defines how to map a plural into the language index. This expression is used to determine the plural form for the translations.
    */
    'pluralExpression'?: string;
    /**
    * The primary language of a group indicates whether a language is the primary language of a group of languages. The group is determine by the ISO 2 letter code.
    */
    'primaryOfGroup'?: boolean;
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
export { RestLanguage };
