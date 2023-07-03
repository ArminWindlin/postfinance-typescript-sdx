import { DatabaseTranslatedStringItem } from "./DatabaseTranslatedStringItem";
declare class DatabaseTranslatedString {
    /**
    *
    */
    'availableLanguages'?: Array<string>;
    /**
    *
    */
    'displayName'?: string;
    /**
    *
    */
    'items'?: Array<DatabaseTranslatedStringItem>;
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
export { DatabaseTranslatedString };
