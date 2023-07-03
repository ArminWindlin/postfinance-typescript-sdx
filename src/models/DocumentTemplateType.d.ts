import { DocumentTemplateTypeGroup } from "./DocumentTemplateTypeGroup";
declare class DocumentTemplateType {
    /**
    *
    */
    'description'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'feature'?: number;
    /**
    *
    */
    'group'?: DocumentTemplateTypeGroup;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'title'?: {
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
export { DocumentTemplateType };
