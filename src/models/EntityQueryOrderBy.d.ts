import { EntityQueryOrderByType } from "./EntityQueryOrderByType";
declare class EntityQueryOrderBy {
    /**
    *
    */
    'fieldName': string;
    /**
    *
    */
    'sorting': EntityQueryOrderByType;
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
export { EntityQueryOrderBy };
