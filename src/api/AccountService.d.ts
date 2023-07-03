/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { Account } from '../models/Account';
import { AccountCreate } from '../models/AccountCreate';
import { AccountUpdate } from '../models/AccountUpdate';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
declare class AccountService {
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
    * Deletes the entity with the given id.
    * @summary Delete
    * @param id
    * @param {*} [options] Override http request options.
    */
    _delete(id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    */
    count(filter?: EntityQueryFilter, options?: any): Promise<{
        response: http.IncomingMessage;
        body: number;
    }>;
    /**
    * Creates the entity with the given properties.
    * @summary Create
    * @param entity The account object with the properties which should be created.
    * @param {*} [options] Override http request options.
    */
    create(entity: AccountCreate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Account;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param id The id of the account which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Account;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param query The query restricts the accounts which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<Account>;
    }>;
    /**
    * This updates the entity with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the entity.
    * @summary Update
    * @param entity The account object with all the properties which should be updated. The id and the version are required properties.
    * @param {*} [options] Override http request options.
    */
    update(entity: AccountUpdate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Account;
    }>;
}
export { AccountService };
