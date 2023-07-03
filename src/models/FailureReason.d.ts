import { FailureCategory } from "./FailureCategory";
declare class FailureReason {
    /**
    *
    */
    'category'?: FailureCategory;
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
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'name'?: {
        [key: string]: string;
    };
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
export { FailureReason };
