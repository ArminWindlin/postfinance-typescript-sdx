/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { InvoiceReconciliationRecord } from '../models/InvoiceReconciliationRecord';
import { TransactionInvoice } from '../models/TransactionInvoice';
declare class InvoiceReconciliationRecordService {
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
    * Discards the invoice reconciliation record.
    * @summary Discard
    * @param spaceId
    * @param id The ID of the invoice reconciliation record which should be discarded.
    * @param {*} [options] Override http request options.
    */
    discard(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The ID of the invoice reconciliation record which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoiceReconciliationRecord;
    }>;
    /**
    * Resolves the invoice reconciliation record.
    * @summary Resolve
    * @param spaceId
    * @param id The ID of the invoice reconciliation record which should be resolved.
    * @param {*} [options] Override http request options.
    */
    resolve(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the invoice reconciliation records which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<InvoiceReconciliationRecord>;
    }>;
    /**
    * Searches for transaction invoices by given query.
    * @summary Search for matchable invoices by query
    * @param spaceId
    * @param query The query restricts the invoices which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    searchForInvoicesByQuery(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<TransactionInvoice>;
    }>;
}
export { InvoiceReconciliationRecordService };
