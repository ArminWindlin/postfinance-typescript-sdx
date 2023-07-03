/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { EntityExportRequest } from '../models/EntityExportRequest';
import { EntityQuery } from '../models/EntityQuery';
import { EntityQueryFilter } from '../models/EntityQueryFilter';
import { PaymentMethodConfiguration } from '../models/PaymentMethodConfiguration';
import { RenderedDocument } from '../models/RenderedDocument';
import { TokenVersion } from '../models/TokenVersion';
import { Transaction } from '../models/Transaction';
import { TransactionCreate } from '../models/TransactionCreate';
import { TransactionLineItemVersion } from '../models/TransactionLineItemVersion';
import { TransactionPending } from '../models/TransactionPending';
declare class TransactionService {
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
    * Exports the transactions into a CSV file. The file will contain the properties defined in the request.
    * @summary Export
    * @param spaceId
    * @param request The request controls the entries which are exported.
    * @param {*} [options] Override http request options.
    */
    _export(spaceId: number, request: EntityExportRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    /**
    * The confirm operation marks the transaction as confirmed. Once the transaction is confirmed no more changes can be applied.
    * @summary Confirm
    * @param spaceId
    * @param transactionModel The transaction JSON object to update and confirm.
    * @param {*} [options] Override http request options.
    */
    confirm(spaceId: number, transactionModel: TransactionPending, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Transaction;
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
    * @param transaction The transaction object which should be created.
    * @param {*} [options] Override http request options.
    */
    create(spaceId: number, transaction: TransactionCreate, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Transaction;
    }>;
    /**
    * This operation allows to create transaction credentials to delegate temporarily the access to the web service API for this particular transaction.
    * @summary Create Transaction Credentials
    * @param spaceId
    * @param id The id of the transaction which should be returned.
    * @param {*} [options] Override http request options.
    */
    createTransactionCredentials(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    /**
    * This operation removes the given token.
    * @summary Delete One-Click Token with Credentials
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param tokenId The token ID will be used to find the token which should be removed.
    * @param {*} [options] Override http request options.
    */
    deleteOneClickTokenWithCredentials(credentials: string, tokenId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
    * This operation returns the token version objects which references the tokens usable as one-click payment tokens for the provided transaction.
    * @summary Fetch One Click Tokens with Credentials
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param {*} [options] Override http request options.
    */
    fetchOneClickTokensWithCredentials(credentials: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<TokenVersion>;
    }>;
    /**
    * This operation allows to get the payment method configurations which can be used with the provided transaction.
    * @summary Fetch Possible Payment Methods
    * @param spaceId
    * @param id The id of the transaction which should be returned.
    * @param integrationMode The integration mode defines the type of integration that is applied on the transaction.
    * @param {*} [options] Override http request options.
    */
    fetchPaymentMethods(spaceId: number, id: number, integrationMode: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<PaymentMethodConfiguration>;
    }>;
    /**
    * This operation allows to get the payment method configurations which can be used with the provided transaction.
    * @summary Fetch Possible Payment Methods with Credentials
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param integrationMode The integration mode defines the type of integration that is applied on the transaction.
    * @param {*} [options] Override http request options.
    */
    fetchPaymentMethodsWithCredentials(credentials: string, integrationMode: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<PaymentMethodConfiguration>;
    }>;
    /**
    * Returns the PDF document for the transaction invoice with given id.
    * @summary getInvoiceDocument
    * @param spaceId
    * @param id The id of the transaction to get the invoice document for.
    * @param {*} [options] Override http request options.
    */
    getInvoiceDocument(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RenderedDocument;
    }>;
    /**
    *
    * @summary getLatestSuccessfulTransactionLineItemVersion
    * @param spaceId
    * @param id The id of the transaction to get the latest line item version for.
    * @param {*} [options] Override http request options.
    */
    getLatestTransactionLineItemVersion(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TransactionLineItemVersion;
    }>;
    /**
    * Returns the packing slip for the transaction with given id.
    * @summary getPackingSlip
    * @param spaceId
    * @param id The id of the transaction to get the packing slip for.
    * @param {*} [options] Override http request options.
    */
    getPackingSlip(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RenderedDocument;
    }>;
    /**
    * This operation assigns the given token to the transaction and process it. This method will return an URL where the customer has to be redirect to complete the transaction.
    * @summary Process One-Click Token with Credentials
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param tokenId The token ID is used to load the corresponding token and to process the transaction with it.
    * @param {*} [options] Override http request options.
    */
    processOneClickTokenAndRedirectWithCredentials(credentials: string, tokenId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    /**
    * This operation processes the transaction without requiring that the customer is present. Means this operation applies strategies to process the transaction without a direct interaction with the buyer. This operation is suitable for recurring transactions.
    * @summary Process Without User Interaction
    * @param spaceId
    * @param id The id of the transaction which should be processed.
    * @param {*} [options] Override http request options.
    */
    processWithoutUserInteraction(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Transaction;
    }>;
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the transaction which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId: number, id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Transaction;
    }>;
    /**
    * Reads the transaction with the given 'id' and returns it. This method uses the credentials to authenticate and identify the transaction.
    * @summary Read With Credentials
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param {*} [options] Override http request options.
    */
    readWithCredentials(credentials: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Transaction;
    }>;
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the transactions which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId: number, query: EntityQuery, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<Transaction>;
    }>;
    /**
    * This updates the entity with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the entity.
    * @summary Update
    * @param spaceId
    * @param entity The transaction object with the properties which should be updated.
    * @param {*} [options] Override http request options.
    */
    update(spaceId: number, entity: TransactionPending, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Transaction;
    }>;
}
export { TransactionService };
