import { AnalyticsQueryExecutionState } from "./AnalyticsQueryExecutionState";
import { FailureReason } from "./FailureReason";
declare class AnalyticsQueryExecution {
    /**
    * The account in which the query has been executed.
    */
    'account'?: number;
    /**
    * The External ID of the query if one had been specified; otherwise null.
    */
    'externalId'?: string;
    /**
    * The reason of the failure if and only if the query has failed, otherwise null.
    */
    'failureReason'?: FailureReason;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The time at which processing of the query has finished (either successfully or by failure or by cancelation). Will be null if the query execution has not finished yet.
    */
    'processingEndTime'?: Date;
    /**
    * The time at which processing of the query has started (never null).
    */
    'processingStartTime'?: Date;
    /**
    * The SQL statement which has been submitted for execution.
    */
    'queryString'?: string;
    /**
    * The amount of data scanned while processing the query (in GB). (Note that this amount may increase over time while the query is still being processed and not finished yet.)
    */
    'scannedDataInGb'?: number;
    /**
    * The maximal amount of scanned data that this query is allowed to scan. After this limit is reached query will be canceled by the system.
    */
    'scannedDataLimit'?: number;
    /**
    * The spaces in which the query has been executed. May be empty if all spaces of the specified account have been queried.
    */
    'spaces'?: Array<number>;
    /**
    * The current state of the query execution.
    */
    'state'?: AnalyticsQueryExecutionState;
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
export { AnalyticsQueryExecution };
