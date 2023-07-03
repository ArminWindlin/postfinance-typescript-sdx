/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { Charge } from '../models/Charge';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { Token } from '../models/Token';
import { TokenCreate } from '../models/TokenCreate';
import { TokenUpdate } from '../models/TokenUpdate';
import { TokenVersion } from '../models/TokenVersion';
import { Transaction } from '../models/Transaction';
declare class TokenService {
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
    * This operation checks if the given transaction can be used to create a token out of it.
    * @summary Check If Token Creation Is Possible
    * @param spaceId
    * @param transactionId The id of the transaction for which we want to check if the token can be created or not.
    * @param {*} [options] Override http request options.
    */
    checkTokenCreationPossible(spaceId: number, transactionId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: boolean;
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
    * @param entity The token object with the properties which should be created.
    * @param {*} [options] Override http request options.
    */
    create(spaceId: number, entity: TokenCreate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Token;
    }>;
    /**
    * This operation creates a token for the given transaction and fills it with the stored payment information of the transaction.
    * @summary Create Token Based On Transaction
    * @param spaceId
    * @param transactionId The id of the transaction for which we want to create the token.
    * @param {*} [options] Override http request options.
    */
    createTokenBasedOnTransaction(spaceId: number, transactionId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TokenVersion;
    }>;
    /**
    * This operation creates a transaction which allows the updating of the provided token.
    * @summary Create Transaction for Token Update
    * @param spaceId
    * @param tokenId The id of the token which should be updated.
    * @param {*} [options] Override http request options.
    */
    createTransactionForTokenUpdate(spaceId: number, tokenId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Transaction;
    }>;
    /**
    * This operation processes the given transaction by using the token associated with the transaction.
    * @summary Process Transaction
    * @param spaceId
    * @param transactionId The id of the transaction for which we want to check if the token can be created or not.
    * @param {*} [options] Override http request options.
    */
    processTransaction(spaceId: number, transactionId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Charge;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the token which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Token;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the tokens which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<Token>;
    }>;
    /**
    * This updates the entity with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the entity.
    * @summary Update
    * @param spaceId
    * @param entity The object with all the properties which should be updated. The id and the version are required properties.
    * @param {*} [options] Override http request options.
    */
    update(spaceId: number, entity: TokenUpdate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Token;
    }>;
}
export { TokenService };
