/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { TransactionCompletion } from '../models/TransactionCompletion';
import { TransactionCompletionRequest } from '../models/TransactionCompletionRequest';
declare class TransactionCompletionService {
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
    * This operation completes the transaction offline. The completion is not forwarded to the processor. This implies the processor does not do anything. This method is only here to fix manually the transaction state.
    * @summary completeOffline
    * @param spaceId
    * @param id The id of the transaction which should be completed.
    * @param {*} [options] Override http request options.
    */
    completeOffline(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionCompletion;
    }>;
    /**
    * This operation completes the transaction online. The completion is forwarded to the processor. This implies that the processor may take some actions based on the completion.
    * @summary completeOnline
    * @param spaceId
    * @param id The id of the transaction which should be completed.
    * @param {*} [options] Override http request options.
    */
    completeOnline(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionCompletion;
    }>;
    /**
    * This operation can be used to partially complete the transaction offline. The completion is not forwarded to the processor. This implies the processor does not do anything. This method is only here to fix manually the transaction state.
    * @summary completePartiallyOffline
    * @param spaceId
    * @param completion
    * @param {*} [options] Override http request options.
    */
    completePartiallyOffline(spaceId: number, completion: TransactionCompletionRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionCompletion;
    }>;
    /**
    * This operation can be used to partially complete the transaction online. The completion is forwarded to the processor. This implies that the processor may take some actions based on the completion.
    * @summary completePartiallyOnline
    * @param spaceId
    * @param completion
    * @param {*} [options] Override http request options.
    */
    completePartiallyOnline(spaceId: number, completion: TransactionCompletionRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionCompletion;
    }>;
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
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the transaction completions which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionCompletion;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the transaction completions which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<TransactionCompletion>;
    }>;
}
export { TransactionCompletionService };
