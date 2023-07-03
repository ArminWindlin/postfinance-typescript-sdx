import { FeatureCategory } from "./FeatureCategory";
declare class Feature {
    /**
    *
    */
    'beta'?: boolean;
    /**
    *
    */
    'category'?: FeatureCategory;
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
    'logoPath'?: string;
    /**
    *
    */
    'name'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'requiredFeatures'?: Array<number>;
    /**
    *
    */
    'sortOrder'?: number;
    /**
    *
    */
    'visible'?: boolean;
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
export { Feature };
