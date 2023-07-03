/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { TransactionInvoiceComment } from '../models/TransactionInvoiceComment';
import { TransactionInvoiceCommentActive } from '../models/TransactionInvoiceCommentActive';
import { TransactionInvoiceCommentCreate } from '../models/TransactionInvoiceCommentCreate';
declare class TransactionInvoiceCommentService {
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
    * Deletes the comment with the given id.
    * @summary Delete
    * @param spaceId
    * @param id
    * @param {*} [options] Override http request options.
    */
    _delete(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * Returns all comments of the given transaction invoice.
    * @summary Find by invoice
    * @param spaceId
    * @param invoiceId
    * @param {*} [options] Override http request options.
    */
    all(spaceId: number, invoiceId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<TransactionInvoiceComment>;
    }>;
    /**
    * Creates the comment with the given properties.
    * @summary Create
    * @param spaceId
    * @param entity
    * @param {*} [options] Override http request options.
    */
    create(spaceId: number, entity: TransactionInvoiceCommentCreate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionInvoiceComment;
    }>;
    /**
    * Pins the comment to the top.
    * @summary Pin
    * @param spaceId
    * @param id
    * @param {*} [options] Override http request options.
    */
    pin(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * Reads the comment with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionInvoiceComment;
    }>;
    /**
    * Unpins the comment from the top.
    * @summary Unpin
    * @param spaceId
    * @param id
    * @param {*} [options] Override http request options.
    */
    unpin(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * This updates the comment with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the comment.
    * @summary Update
    * @param spaceId
    * @param entity
    * @param {*} [options] Override http request options.
    */
    update(spaceId: number, entity: TransactionInvoiceCommentActive, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionInvoiceComment;
    }>;
}
export { TransactionInvoiceCommentService };
