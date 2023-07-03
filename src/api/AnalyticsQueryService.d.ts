/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { AnalyticsQuery } from '../models/AnalyticsQuery';
import { AnalyticsQueryExecution } from '../models/AnalyticsQueryExecution';
import { AnalyticsQueryResultBatch } from '../models/AnalyticsQueryResultBatch';
import { AnalyticsSchemaTable } from '../models/AnalyticsSchemaTable';
declare class AnalyticsQueryService {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected _timeout: number;
    protected authentications: {
        default: Authentication;
    };
    constructor(configuration: any);
    /**
    * Set timeout in seconds. Default timeout: 25 seconds
    * @param {number} timeout
    */
    set timeout(timeout: number);
    private setTimeout;
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    protected setDefaultAuthentication(auth: Authentication): void;
    private getVersion;
    /**
    * Cancels the specified query execution.
    * @summary Cancel Execution
    * @param id The ID of the query execution to cancel.
    * @param {*} [options] Override http request options.
    */
    cancelExecution(id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * Fetches one batch of the result of a query execution.
    * @summary Fetch Result
    * @param id The ID of the query execution for which to fetch the result.
    * @param timeout The maximal time in seconds to wait for the result if it is not yet available. Use 0 (the default) to return immediately without waiting.
    * @param maxRows The maximum number of rows to return per batch. (Between 1 and 999. The default is 999.)
    * @param nextToken The next-token of the preceding batch to get the next result batch or null to get the first result batch.
    * @param {*} [options] Override http request options.
    */
    fetchResult(id: number, timeout?: number, maxRows?: number, nextToken?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: AnalyticsQueryResultBatch;
    }>;
    /**
    * Generate a URL from which the results of a query execution can be downloaded in CSV format.
    * @summary Generate Download URL
    * @param id The ID of the query execution for which to generate the download URL.
    * @param timeout The maximal time in seconds to wait for the result if it is not yet available. Use 0 (the default) to return immediately without waiting.
    * @param {*} [options] Override http request options.
    */
    generateDownloadUrl(id: number, timeout?: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    /**
    * Get the schemas describing the available tables and their columns.
    * @summary Get Schemas
    * @param {*} [options] Override http request options.
    */
    schema(options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<AnalyticsSchemaTable>;
    }>;
    /**
    * Returns the current status of a query execution.
    * @summary Execution Status
    * @param id The ID of the query execution for which to get the status.
    * @param {*} [options] Override http request options.
    */
    status(id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: AnalyticsQueryExecution;
    }>;
    /**
    * Submits a query for execution.
    * @summary Submit Query
    * @param query The query to submit.
    * @param {*} [options] Override http request options.
    */
    submitQuery(query: AnalyticsQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: AnalyticsQueryExecution;
    }>;
}
export { AnalyticsQueryService };
