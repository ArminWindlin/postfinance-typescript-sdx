/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { PaymentTerminalTransactionSummary } from '../models/PaymentTerminalTransactionSummary';
import { PaymentTerminalTransactionSummaryFetchRequest } from '../models/PaymentTerminalTransactionSummaryFetchRequest';
import { RenderedTerminalTransactionSummary } from '../models/RenderedTerminalTransactionSummary';
declare class PaymentTerminalTransactionSummaryService {
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
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param spaceId
    * @param filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    */
    count(spaceId: number, filter?: EntityQueryFilter, options?: any): Promise<{
        response: http.IncomingMessage;
        body: number;
    }>;
    /**
    * Returns the terminal receipt corresponding to the specified transaction summary id.
    * @summary Fetch Receipt
    * @param spaceId
    * @param request
    * @param {*} [options] Override http request options.
    */
    fetchReceipt(spaceId: number, request: PaymentTerminalTransactionSummaryFetchRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RenderedTerminalTransactionSummary;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the transaction summary report which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PaymentTerminalTransactionSummary;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the transaction summary reports which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<PaymentTerminalTransactionSummary>;
    }>;
}
export { PaymentTerminalTransactionSummaryService };
