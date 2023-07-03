/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { ShopifySubscription } from '../models/ShopifySubscription';
import { ShopifySubscriptionCreationRequest } from '../models/ShopifySubscriptionCreationRequest';
import { ShopifySubscriptionUpdateAddressesRequest } from '../models/ShopifySubscriptionUpdateAddressesRequest';
import { ShopifySubscriptionUpdateRequest } from '../models/ShopifySubscriptionUpdateRequest';
import { ShopifySubscriptionVersion } from '../models/ShopifySubscriptionVersion';
declare class ShopifySubscriptionService {
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
    * This operation allows to create a Shopify subscription.
    * @summary Create
    * @param spaceId
    * @param creationRequest
    * @param {*} [options] Override http request options.
    */
    create(spaceId: number, creationRequest: ShopifySubscriptionCreationRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ShopifySubscriptionVersion;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the Shopify subscription which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ShopifySubscription;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the Shopify subscriptions which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<ShopifySubscription>;
    }>;
    /**
    * This operation allows to terminate a Shopify subscription.
    * @summary Terminate
    * @param spaceId
    * @param subscriptionId The ID identifies the Shopify subscription which should be terminated.
    * @param respectTerminationPeriod The respect termination period controls whether the termination period configured on the product version should be respected or if the operation should take effect immediately.
    * @param {*} [options] Override http request options.
    */
    terminate(spaceId: number, subscriptionId: number, respectTerminationPeriod: boolean, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * This operation allows to update a Shopify subscription.
    * @summary Update
    * @param spaceId
    * @param subscription
    * @param {*} [options] Override http request options.
    */
    update(spaceId: number, subscription: ShopifySubscriptionUpdateRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ShopifySubscriptionVersion;
    }>;
    /**
    * This operation allows to update a Shopify subscription addresses.
    * @summary Update Addresses
    * @param spaceId
    * @param updateRequest
    * @param {*} [options] Override http request options.
    */
    updateAddresses(spaceId: number, updateRequest: ShopifySubscriptionUpdateAddressesRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ShopifySubscriptionVersion;
    }>;
}
export { ShopifySubscriptionService };
