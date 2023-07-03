import { AnalyticsQueryExecution } from "./AnalyticsQueryExecution";
import { AnalyticsSchemaColumn } from "./AnalyticsSchemaColumn";
declare class AnalyticsQueryResultBatch {
    /**
    * The schemas of the columns returned by the query (in order). Will be null if the results of the query are not (yet) available.
    */
    'columns'?: Array<AnalyticsSchemaColumn>;
    /**
    * The token to be provided to fetch the next batch of results. May be null if no more result batches are available.
    */
    'nextToken'?: string;
    /**
    * The query execution which produced the result.
    */
    'queryExecution'?: AnalyticsQueryExecution;
    /**
    * The rows of the result set contained in this batch where each row is a list of column values (in order of the columns specified in the query). Will be null if the results of the query are not (yet) available.
    */
    'rows'?: Array<Array<string>>;
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
export { AnalyticsQueryResultBatch };
