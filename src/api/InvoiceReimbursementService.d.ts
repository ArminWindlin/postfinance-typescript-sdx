/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { InvoiceReimbursement } from '../models/InvoiceReimbursement';
import { InvoiceReimbursementWithRefundReference } from '../models/InvoiceReimbursementWithRefundReference';
declare class InvoiceReimbursementService {
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
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The ID of the invoice reimbursement which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoiceReimbursement;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the invoice reimbursements which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<InvoiceReimbursementWithRefundReference>;
    }>;
    /**
    * Updates payment connector configuration for reimbursement which is in manual review.
    * @summary Update payment connector configuration
    * @param spaceId
    * @param id The ID of the invoice reimbursement of which connector should be updated.
    * @param paymentConnectorConfigurationId
    * @param {*} [options] Override http request options.
    */
    updateConnector(spaceId: number, id: number, paymentConnectorConfigurationId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * Updates recipient and/or sender IBAN for reimbursement which is in manual review.
    * @summary Update IBAN
    * @param spaceId
    * @param id The ID of the invoice reimbursement of which IBANs should be updated.
    * @param recipientIban
    * @param senderIban
    * @param {*} [options] Override http request options.
    */
    updateIban(spaceId: number, id: number, recipientIban?: string, senderIban?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export { InvoiceReimbursementService };
