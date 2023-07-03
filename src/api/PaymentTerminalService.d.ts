/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { PaymentTerminal } from '../models/PaymentTerminal';
declare class PaymentTerminalService {
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
    * Links the device with given serial number with terminal.
    * @summary Link Device With Terminal
    * @param spaceId
    * @param terminalId
    * @param serialNumber
    * @param {*} [options] Override http request options.
    */
    link(spaceId: number, terminalId: number, serialNumber: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the payment terminal which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PaymentTerminal;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the payment terminals which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<PaymentTerminal>;
    }>;
    /**
    * Remotely triggers the final balance receipt on the terminal.
    * @summary Remotely Trigger Final Balance
    * @param spaceId
    * @param terminalId
    * @param {*} [options] Override http request options.
    */
    triggerFinalBalance(spaceId: number, terminalId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * Remotely triggers the final balance receipt on the terminal by terminal identifier.
    * @summary Remotely Trigger Final Balance By Identifier
    * @param spaceId
    * @param terminalIdentifier
    * @param {*} [options] Override http request options.
    */
    triggerFinalBalanceByIdentifier(spaceId: number, terminalIdentifier: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * Unlinks the device from terminal.
    * @summary Unlink Device With Terminal
    * @param spaceId
    * @param terminalId
    * @param {*} [options] Override http request options.
    */
    unlink(spaceId: number, terminalId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export { PaymentTerminalService };
