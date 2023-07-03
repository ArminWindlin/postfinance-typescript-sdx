/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { ChargeFlow } from '../models/ChargeFlow';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { Transaction } from '../models/Transaction';
declare class ChargeFlowService {
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
    *
    * @summary applyFlow
    * @param spaceId
    * @param id The transaction id of the transaction which should be process asynchronously.
    * @param {*} [options] Override http request options.
    */
    applyFlow(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Transaction;
    }>;
    /**
    * This operation cancels the charge flow that is linked with the transaction indicated by the given ID.
    * @summary Cancel Charge Flow
    * @param spaceId
    * @param id The ID of the transaction for which the charge flow should be canceled.
    * @param {*} [options] Override http request options.
    */
    cancelChargeFlow(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Transaction;
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
    * This operation allows to fetch the payment page URL that is been applied on the charge flow linked with the provided transaction. The operation might return an empty result when no payment page is needed or can be invoked.
    * @summary Fetch Charge Flow Payment Page URL
    * @param spaceId
    * @param id The transaction id of the transaction for which the URL of the charge flow should be fetched.
    * @param {*} [options] Override http request options.
    */
    fetchChargeFlowPaymentPageUrl(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the charge flow which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ChargeFlow;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the charge flows which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<ChargeFlow>;
    }>;
    /**
    *
    * @summary updateRecipient
    * @param spaceId
    * @param transactionId The transaction id of the transaction whose recipient should be updated.
    * @param type The id of the charge flow configuration type to recipient should be updated for.
    * @param recipient The recipient address that should be used to send the payment URL.
    * @param {*} [options] Override http request options.
    */
    updateRecipient(spaceId: number, transactionId: number, type: number, recipient: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export { ChargeFlowService };
