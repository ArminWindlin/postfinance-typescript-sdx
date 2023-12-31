import { RestAddressFormat } from "./RestAddressFormat";
declare class RestCountry {
    /**
    * The ISO code 2 letter identifies the country by two chars as defined in ISO 3166-1 (e.g. US, DE, CH).
    */
    'iSOCode2Letter'?: string;
    /**
    * The ISO code 3 letter identifies the country by three chars as defined in ISO 3166-1 (e.g. CHE, USA, GBR).
    */
    'iSOCode3Letter'?: string;
    /**
    * The address format of the country indicates how an address has to look like for the country.
    */
    'addressFormat'?: RestAddressFormat;
    /**
    * The name labels the country by a name in English.
    */
    'name'?: string;
    /**
    * The numeric code identifies the country by a three digit number as defined in ISO 3166-1 (e.g. 840, 826, 756).
    */
    'numericCode'?: string;
    /**
    * The state codes field is a list of all states associated with this country. The list contains the identifiers of the states. The identifiers corresponds to the ISO 3166-2 subdivision identifier.
    */
    'stateCodes'?: Array<string>;
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
export { RestCountry };
