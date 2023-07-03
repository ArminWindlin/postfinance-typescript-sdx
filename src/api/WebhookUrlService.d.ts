/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { WebhookUrl } from '../models/WebhookUrl';
import { WebhookUrlCreate } from '../models/WebhookUrlCreate';
import { WebhookUrlUpdate } from '../models/WebhookUrlUpdate';
declare class WebhookUrlService {
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
    * @param entity The webhook url object with the properties which should be created.
    * @param {*} [options] Override http request options.
    */
    create(spaceId: number, entity: WebhookUrlCreate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: WebhookUrl;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the webhook url which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: WebhookUrl;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the webhook urls which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<WebhookUrl>;
    }>;
    /**
    * This updates the entity with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the entity.
    * @summary Update
    * @param spaceId
    * @param entity The webhook url object with all the properties which should be updated. The id and the version are required properties.
    * @param {*} [options] Override http request options.
    */
    update(spaceId: number, entity: WebhookUrlUpdate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: WebhookUrl;
    }>;
}
export { WebhookUrlService };
