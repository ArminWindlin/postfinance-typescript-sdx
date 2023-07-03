/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { Transaction } from '../models/Transaction';
declare class PaymentTerminalTillService {
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
    * Starts a payment terminal transaction and waits for its completion. If the call returns with a long polling timeout status, you may try again. The processing of the transaction will be picked up where it was left off.
    * @summary Perform Payment Terminal Transaction
    * @param spaceId
    * @param transactionId The ID of the transaction which is used to process with the terminal.
    * @param terminalId The ID of the terminal which should be used to process the transaction.
    * @param language The language in which the messages should be rendered in.
    * @param {*} [options] Override http request options.
    */
    performTransaction(spaceId: number, transactionId: number, terminalId: number, language?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Transaction;
    }>;
    /**
    * Starts a payment terminal transaction and waits for its completion. If the call returns with a long polling timeout status, you may try again. The processing of the transaction will be picked up where it was left off.
    * @summary Perform Payment Terminal Transaction (using TID)
    * @param spaceId
    * @param transactionId The ID of the transaction which is used to process with the terminal.
    * @param terminalIdentifier The identifier (aka TID) of the terminal which should be used to process the transaction.
    * @param language The language in which the messages should be rendered in.
    * @param {*} [options] Override http request options.
    */
    performTransactionByIdentifier(spaceId: number, transactionId: number, terminalIdentifier: string, language?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Transaction;
    }>;
}
export { PaymentTerminalTillService };
