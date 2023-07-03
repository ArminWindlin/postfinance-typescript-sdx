/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { RestCountryState } from '../models/RestCountryState';
declare class CountryStateService {
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
    * This operation returns all states of all countries.
    * @summary All
    * @param {*} [options] Override http request options.
    */
    all(options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<RestCountryState>;
    }>;
    /**
    * This operation returns all states for a given country.
    * @summary Find by Country
    * @param code The country code in ISO code two letter format for which all states should be returned.
    * @param {*} [options] Override http request options.
    */
    country(code: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<RestCountryState>;
    }>;
}
export { CountryStateService };
