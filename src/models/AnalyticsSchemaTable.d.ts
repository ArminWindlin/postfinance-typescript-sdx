import { AnalyticsSchemaColumn } from "./AnalyticsSchemaColumn";
declare class AnalyticsSchemaTable {
    /**
    * The schemas of all columns of this table.
    */
    'columns'?: Array<AnalyticsSchemaColumn>;
    /**
    * A human readable description of the entity type contained in this table.
    */
    'description'?: {
        [key: string]: string;
    };
    /**
    * The name of this table.
    */
    'tableName'?: string;
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
export { AnalyticsSchemaTable };
