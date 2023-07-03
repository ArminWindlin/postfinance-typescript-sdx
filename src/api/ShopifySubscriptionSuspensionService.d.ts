/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { ShopifySubscriptionSuspension } from '../models/ShopifySubscriptionSuspension';
import { ShopifySubscriptionSuspensionCreate } from '../models/ShopifySubscriptionSuspensionCreate';
declare class ShopifySubscriptionSuspensionService {
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
    * This operation allows to reactivate a suspended Shopify subscription.
    * @summary Reactivate
    * @param spaceId
    * @param subscriptionId The ID identifies the suspended Shopify subscription which should be reactivated.
    * @param {*} [options] Override http request options.
    */
    reactivate(spaceId: number, subscriptionId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the Shopify subscription suspension which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ShopifySubscriptionSuspension;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the Shopify subscription suspensions which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<ShopifySubscriptionSuspension>;
    }>;
    /**
    * This operation allows to suspend a Shopify subscription.
    * @summary Suspend
    * @param spaceId
    * @param suspension
    * @param {*} [options] Override http request options.
    */
    suspend(spaceId: number, suspension: ShopifySubscriptionSuspensionCreate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ShopifySubscriptionSuspension;
    }>;
}
export { ShopifySubscriptionSuspensionService };
