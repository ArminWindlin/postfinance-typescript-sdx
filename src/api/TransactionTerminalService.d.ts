/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { RenderedTerminalReceipt } from '../models/RenderedTerminalReceipt';
import { TerminalReceiptFetchRequest } from '../models/TerminalReceiptFetchRequest';
declare class TransactionTerminalService {
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
    * Returns all receipts for the requested terminal transaction.
    * @summary Fetch Receipts
    * @param spaceId
    * @param request
    * @param {*} [options] Override http request options.
    */
    fetchReceipts(spaceId: number, request: TerminalReceiptFetchRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<RenderedTerminalReceipt>;
    }>;
    /**
    * This operation creates a set of credentials to use within the WebSocket.
    * @summary Create Till Connection Credentials
    * @param spaceId
    * @param transactionId The ID of the transaction which is used to process with the terminal.
    * @param terminalId The ID of the terminal which should be used to process the transaction.
    * @param language The language in which the messages should be rendered in.
    * @param {*} [options] Override http request options.
    */
    tillConnectionCredentials(spaceId: number, transactionId: number, terminalId: number, language?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
}
export { TransactionTerminalService };
