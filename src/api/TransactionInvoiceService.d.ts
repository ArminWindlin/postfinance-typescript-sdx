/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { RenderedDocument } from '../models/RenderedDocument';
import { TransactionInvoice } from '../models/TransactionInvoice';
import { TransactionInvoiceReplacement } from '../models/TransactionInvoiceReplacement';
declare class TransactionInvoiceService {
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
    * Returns the PDF document for the transaction invoice with given id.
    * @summary getInvoiceDocument
    * @param spaceId
    * @param id The id of the transaction invoice to get the document for.
    * @param {*} [options] Override http request options.
    */
    getInvoiceDocument(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RenderedDocument;
    }>;
    /**
    * Returns the PDF document for the transaction invoice with given id and target media type id.
    * @summary getInvoiceDocumentWithTargetMediaType
    * @param spaceId
    * @param id The id of the transaction invoice to get the document for.
    * @param targetMediaTypeId The id of the target media type for which the invoice should be generated for.
    * @param {*} [options] Override http request options.
    */
    getInvoiceDocumentWithTargetMediaType(spaceId: number, id: number, targetMediaTypeId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RenderedDocument;
    }>;
    /**
    * Returns whether the transaction invoice with the given id can be replaced.
    * @summary isReplacementPossible
    * @param spaceId
    * @param id The invoice which should be checked if a replacement is possible.
    * @param {*} [options] Override http request options.
    */
    isReplacementPossible(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    /**
    * Marks the transaction invoice with the given id as derecognized.
    * @summary Mark as Derecognized
    * @param spaceId
    * @param id The id of the transaction invoice which should be marked as derecognized.
    * @param {*} [options] Override http request options.
    */
    markAsDerecognized(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionInvoice;
    }>;
    /**
    * Marks the transaction invoice with the given id as paid.
    * @summary Mark as Paid
    * @param spaceId
    * @param id The id of the transaction invoice which should be marked as paid.
    * @param {*} [options] Override http request options.
    */
    markAsPaid(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionInvoice;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the transaction invoices which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionInvoice;
    }>;
    /**
    * Replaces the transaction invoice with given id with the replacement and returns the new transaction invoice.
    * @summary replace
    * @param spaceId
    * @param id The id of the transaction invoices which should be replaced.
    * @param replacement
    * @param {*} [options] Override http request options.
    */
    replace(spaceId: number, id: number, replacement: TransactionInvoiceReplacement, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionInvoice;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the transaction invoices which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<TransactionInvoice>;
    }>;
}
export { TransactionInvoiceService };
