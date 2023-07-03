/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { LegalOrganizationForm } from '../models/LegalOrganizationForm';
declare class LegalOrganizationFormService {
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
        body: Array<LegalOrganizationForm>;
    }>;
    /**
    * This operation returns all legal organization forms for a given country.
    * @summary Find by Country
    * @param code The country in ISO 3166-1 alpha-2 format, for which all legal organization forms should be returned.
    * @param {*} [options] Override http request options.
    */
    country(code: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<LegalOrganizationForm>;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param id The id of the legal organization form which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: LegalOrganizationForm;
    }>;
}
export { LegalOrganizationFormService };
