import { DataCollectionType } from "./DataCollectionType";
declare class PaymentMethod {
    /**
    *
    */
    'dataCollectionTypes'?: Array<DataCollectionType>;
    /**
    *
    */
    'description'?: {
        [key: string]: string;
    };
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'imagePath'?: string;
    /**
    *
    */
    'merchantDescription'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'name'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'supportedCurrencies'?: Array<string>;
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
export { PaymentMethod };
