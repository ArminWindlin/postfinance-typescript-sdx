import { LabelDescriptorCategory } from "./LabelDescriptorCategory";
declare class LabelDescriptor {
    /**
    *
    */
    'category'?: LabelDescriptorCategory;
    /**
    *
    */
    'description'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'features'?: Array<number>;
    /**
    *
    */
    'group'?: number;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'name'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'type'?: number;
    /**
    *
    */
    'weight'?: number;
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
export { LabelDescriptor };
