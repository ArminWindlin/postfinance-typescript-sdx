/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { Refund } from '../models/Refund';
import { RefundCreate } from '../models/RefundCreate';
import { RenderedDocument } from '../models/RenderedDocument';
declare class RefundService {
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
    * This operation allows to mark a refund as failed which is in state MANUAL_CHECK.
    * @summary fail
    * @param spaceId
    * @param refundId The id of the refund which should be marked as failed.
    * @param {*} [options] Override http request options.
    */
    fail(spaceId: number, refundId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Refund;
    }>;
    /**
    * Returns the PDF document for the refund with given id.
    * @summary getRefundDocument
    * @param spaceId
    * @param id The id of the refund to get the document for.
    * @param {*} [options] Override http request options.
    */
    getRefundDocument(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RenderedDocument;
    }>;
    /**
    * Returns the PDF document for the refund with given id and the given target media type.
    * @summary getRefundDocumentWithTargetMediaType
    * @param spaceId
    * @param id The id of the refund to get the document for.
    * @param targetMediaTypeId The id of the target media type for which the refund should be generated for.
    * @param {*} [options] Override http request options.
    */
    getRefundDocumentWithTargetMediaType(spaceId: number, id: number, targetMediaTypeId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RenderedDocument;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the refund which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Refund;
    }>;
    /**
    * This operation creates and executes a refund of a particular transaction.
    * @summary create
    * @param spaceId
    * @param refund The refund object which should be created.
    * @param {*} [options] Override http request options.
    */
    refund(spaceId: number, refund: RefundCreate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Refund;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the refunds which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<Refund>;
    }>;
    /**
    * This operation allows to mark a refund as successful which is in state MANUAL_CHECK.
    * @summary succeed
    * @param spaceId
    * @param refundId The id of the refund which should be marked as successful.
    * @param {*} [options] Override http request options.
    */
    succeed(spaceId: number, refundId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Refund;
    }>;
}
export { RefundService };
