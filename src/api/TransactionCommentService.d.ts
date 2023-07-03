/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { TransactionComment } from '../models/TransactionComment';
import { TransactionCommentActive } from '../models/TransactionCommentActive';
import { TransactionCommentCreate } from '../models/TransactionCommentCreate';
declare class TransactionCommentService {
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
    * Returns all comments of the transaction.
    * @summary Find by transaction
    * @param spaceId
    * @param transactionId
    * @param {*} [options] Override http request options.
    */
    all(spaceId: number, transactionId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<TransactionComment>;
    }>;
    /**
    * Creates the comment with the given properties.
    * @summary Create
    * @param spaceId
    * @param entity
    * @param {*} [options] Override http request options.
    */
    create(spaceId: number, entity: TransactionCommentCreate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionComment;
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
        body: TransactionComment;
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
    update(spaceId: number, entity: TransactionCommentActive, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionComment;
    }>;
}
export { TransactionCommentService };
