import { RestAddressFormatField } from "./RestAddressFormatField";
declare class RestAddressFormat {
    /**
    * The example post codes allow the user to understand what we expect here.
    */
    'postCodeExamples'?: Array<string>;
    /**
    * The post code regex is a regular expression which can validates the input of the post code.
    */
    'postCodeRegex'?: string;
    /**
    * The required fields indicate what fields are required within an address to comply with the address format.
    */
    'requiredFields'?: Array<RestAddressFormatField>;
    /**
    * The used fields indicate what fields are used within this address format.
    */
    'usedFields'?: Array<RestAddressFormatField>;
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
export { RestAddressFormat };
