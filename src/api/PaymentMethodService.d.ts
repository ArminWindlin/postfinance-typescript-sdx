/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { PaymentMethod } from '../models/PaymentMethod';
declare class PaymentMethodService {
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
    * This operation returns all entities which are available.
    * @summary All
    * @param {*} [options] Override http request options.
    */
    all(options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<PaymentMethod>;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param id The id of the payment method which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PaymentMethod;
    }>;
}
export { PaymentMethodService };
