import { ManualTaskActionStyle } from "./ManualTaskActionStyle";
declare class ManualTaskAction {
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'label'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'style'?: ManualTaskActionStyle;
    /**
    *
    */
    'taskType'?: number;
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
export { ManualTaskAction };
