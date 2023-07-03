/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
declare class TransactionLightboxService {
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
    * This operation creates the URL which can be used to embed the JavaScript for handling the Lightbox checkout flow.
    * @summary Build JavaScript URL
    * @param spaceId
    * @param id The id of the transaction which should be returned.
    * @param {*} [options] Override http request options.
    */
    javascriptUrl(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
}
export { TransactionLightboxService };
