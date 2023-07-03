/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { Customer } from '../models/Customer';
import { CustomerActive } from '../models/CustomerActive';
import { CustomerCreate } from '../models/CustomerCreate';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
declare class CustomerService {
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
    * @param spaceId
    * @param id
    * @param {*} [options] Override http request options.
    */
    _delete(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
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
    * Creates the entity with the given properties.
    * @summary Create
    * @param spaceId
    * @param entity The customer object which should be created.
    * @param {*} [options] Override http request options.
    */
    create(spaceId: number, entity: CustomerCreate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Customer;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the customer which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Customer;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the customers which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<Customer>;
    }>;
    /**
    * This updates the entity with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the entity.
    * @summary Update
    * @param spaceId
    * @param entity The customer object with the properties which should be updated.
    * @param {*} [options] Override http request options.
    */
    update(spaceId: number, entity: CustomerActive, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Customer;
    }>;
}
export { CustomerService };
