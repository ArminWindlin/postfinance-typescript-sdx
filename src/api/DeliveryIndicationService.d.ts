/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { DeliveryIndication } from '../models/DeliveryIndication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
declare class DeliveryIndicationService {
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
    * This operation marks the delivery indication as not suitable.
    * @summary markAsNotSuitable
    * @param spaceId
    * @param deliveryIndicationId The delivery indication id which should be marked as not suitable.
    * @param {*} [options] Override http request options.
    */
    markAsNotSuitable(spaceId: number, deliveryIndicationId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: DeliveryIndication;
    }>;
    /**
    * This operation marks the delivery indication as suitable.
    * @summary markAsSuitable
    * @param spaceId
    * @param deliveryIndicationId The delivery indication id which should be marked as suitable.
    * @param {*} [options] Override http request options.
    */
    markAsSuitable(spaceId: number, deliveryIndicationId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: DeliveryIndication;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the delivery indication which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: DeliveryIndication;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the delivery indications which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<DeliveryIndication>;
    }>;
}
export { DeliveryIndicationService };
