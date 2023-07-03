/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
declare class TransactionMobileSdkService {
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
    * This operation builds the URL which is used to load the payment form within a WebView on a mobile device. This operation is typically called through the mobile SDK.
    * @summary Build Mobile SDK URL
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param {*} [options] Override http request options.
    */
    paymentFormUrl(credentials: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
}
export { TransactionMobileSdkService };
