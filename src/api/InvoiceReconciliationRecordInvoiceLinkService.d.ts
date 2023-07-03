/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { InvoiceReconciliationRecordInvoiceLink } from '../models/InvoiceReconciliationRecordInvoiceLink';
declare class InvoiceReconciliationRecordInvoiceLinkService {
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
    * Links the invoice reconciliation record with the provided invoice.
    * @summary Link Invoice
    * @param spaceId
    * @param recordId The ID of the invoice reconciliation record which should be linked.
    * @param completionId The ID of the completion which should be linked.
    * @param amount The amount of the invoice reconciliation record linked completion which should be changed.
    * @param {*} [options] Override http request options.
    */
    link(spaceId: number, recordId: number, completionId: number, amount?: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoiceReconciliationRecordInvoiceLink;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The ID of the invoice reconciliation record invoice link which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoiceReconciliationRecordInvoiceLink;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the invoice reconciliation record invoice link which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<InvoiceReconciliationRecordInvoiceLink>;
    }>;
    /**
    * Unlinks the invoice reconciliation record from the provided invoice.
    * @summary Unlink Invoice
    * @param spaceId
    * @param recordId The ID of the invoice reconciliation record which should be unlinked.
    * @param completionId The ID of the completion which should be unlinked.
    * @param {*} [options] Override http request options.
    */
    unlinkTransaction(spaceId: number, recordId: number, completionId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export { InvoiceReconciliationRecordInvoiceLinkService };
