'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const localVarRequest = require("request");
const Promise = require("bluebird");
const VoidAuth_1 = require("../auth/VoidAuth");
const ObjectSerializer_1 = require("../serializers/ObjectSerializer");
const ClientError_1 = require("../models/ClientError");
const ServerError_1 = require("../models/ServerError");
class TransactionService {
    constructor(configuration) {
        this._basePath = 'https://checkout.postfinance.ch:443/api';
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this._timeout = 25;
        this.authentications = {
            'default': new VoidAuth_1.VoidAuth({})
        };
        this.setDefaultAuthentication(new VoidAuth_1.VoidAuth(configuration));
        this.defaultHeaders = configuration.default_headers;
        this.setTimeout(configuration.timeout);
    }
    /**
    * Set timeout in seconds. Default timeout: 25 seconds
    * @param {number} timeout
    */
    set timeout(timeout) {
        this.setTimeout(timeout);
    }
    setTimeout(timeout) {
        if (timeout !== undefined) {
            if (!Number.isInteger(timeout)) {
                throw new Error('Timeout value has to be integer');
            }
            if (timeout) {
                this._timeout = timeout;
            }
            else {
                throw new Error('Timeout value has to be greater than 0');
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    getVersion() {
        if (typeof (process) !== 'undefined' && process && process.version) {
            return 'node ' + process.version;
        }
        else {
            return 'unknown';
        }
    }
    /**
    * Exports the transactions into a CSV file. The file will contain the properties defined in the request.
    * @summary Export
    * @param spaceId
    * @param request The request controls the entries which are exported.
    * @param {*} [options] Override http request options.
    */
    _export(spaceId, request, options = {}) {
        const localVarPath = '/transaction/export';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling _export.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling _export.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer_1.ObjectSerializer.serialize(request, "EntityExportRequest"),
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "string");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * The confirm operation marks the transaction as confirmed. Once the transaction is confirmed no more changes can be applied.
    * @summary Confirm
    * @param spaceId
    * @param transactionModel The transaction JSON object to update and confirm.
    * @param {*} [options] Override http request options.
    */
    confirm(spaceId, transactionModel, options = {}) {
        const localVarPath = '/transaction/confirm';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling confirm.');
        }
        // verify required parameter 'transactionModel' is not null or undefined
        if (transactionModel === null || transactionModel === undefined) {
            throw new Error('Required parameter transactionModel was null or undefined when calling confirm.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer_1.ObjectSerializer.serialize(transactionModel, "TransactionPending"),
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Transaction");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param spaceId
    * @param filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    */
    count(spaceId, filter, options = {}) {
        const localVarPath = '/transaction/count';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling count.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer_1.ObjectSerializer.serialize(filter, "EntityQueryFilter"),
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "number");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * Creates the entity with the given properties.
    * @summary Create
    * @param spaceId
    * @param transaction The transaction object which should be created.
    * @param {*} [options] Override http request options.
    */
    create(spaceId, transaction, options = {}) {
        const localVarPath = '/transaction/create';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling create.');
        }
        // verify required parameter 'transaction' is not null or undefined
        if (transaction === null || transaction === undefined) {
            throw new Error('Required parameter transaction was null or undefined when calling create.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer_1.ObjectSerializer.serialize(transaction, "TransactionCreate"),
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Transaction");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * This operation allows to create transaction credentials to delegate temporarily the access to the web service API for this particular transaction.
    * @summary Create Transaction Credentials
    * @param spaceId
    * @param id The id of the transaction which should be returned.
    * @param {*} [options] Override http request options.
    */
    createTransactionCredentials(spaceId, id, options = {}) {
        const localVarPath = '/transaction/createTransactionCredentials';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling createTransactionCredentials.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling createTransactionCredentials.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer_1.ObjectSerializer.serialize(id, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "string");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * This operation removes the given token.
    * @summary Delete One-Click Token with Credentials
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param tokenId The token ID will be used to find the token which should be removed.
    * @param {*} [options] Override http request options.
    */
    deleteOneClickTokenWithCredentials(credentials, tokenId, options = {}) {
        const localVarPath = '/transaction/deleteOneClickTokenWithCredentials';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'credentials' is not null or undefined
        if (credentials === null || credentials === undefined) {
            throw new Error('Required parameter credentials was null or undefined when calling deleteOneClickTokenWithCredentials.');
        }
        // verify required parameter 'tokenId' is not null or undefined
        if (tokenId === null || tokenId === undefined) {
            throw new Error('Required parameter tokenId was null or undefined when calling deleteOneClickTokenWithCredentials.');
        }
        if (credentials !== undefined) {
            localVarQueryParameters['credentials'] = ObjectSerializer_1.ObjectSerializer.serialize(credentials, "string");
        }
        if (tokenId !== undefined) {
            localVarQueryParameters['tokenId'] = ObjectSerializer_1.ObjectSerializer.serialize(tokenId, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * This operation returns the token version objects which references the tokens usable as one-click payment tokens for the provided transaction.
    * @summary Fetch One Click Tokens with Credentials
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param {*} [options] Override http request options.
    */
    fetchOneClickTokensWithCredentials(credentials, options = {}) {
        const localVarPath = '/transaction/fetchOneClickTokensWithCredentials';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'credentials' is not null or undefined
        if (credentials === null || credentials === undefined) {
            throw new Error('Required parameter credentials was null or undefined when calling fetchOneClickTokensWithCredentials.');
        }
        if (credentials !== undefined) {
            localVarQueryParameters['credentials'] = ObjectSerializer_1.ObjectSerializer.serialize(credentials, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Array<TokenVersion>");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * This operation allows to get the payment method configurations which can be used with the provided transaction.
    * @summary Fetch Possible Payment Methods
    * @param spaceId
    * @param id The id of the transaction which should be returned.
    * @param integrationMode The integration mode defines the type of integration that is applied on the transaction.
    * @param {*} [options] Override http request options.
    */
    fetchPaymentMethods(spaceId, id, integrationMode, options = {}) {
        const localVarPath = '/transaction/fetch-payment-methods';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling fetchPaymentMethods.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling fetchPaymentMethods.');
        }
        // verify required parameter 'integrationMode' is not null or undefined
        if (integrationMode === null || integrationMode === undefined) {
            throw new Error('Required parameter integrationMode was null or undefined when calling fetchPaymentMethods.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer_1.ObjectSerializer.serialize(id, "number");
        }
        if (integrationMode !== undefined) {
            localVarQueryParameters['integrationMode'] = ObjectSerializer_1.ObjectSerializer.serialize(integrationMode, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Array<PaymentMethodConfiguration>");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * This operation allows to get the payment method configurations which can be used with the provided transaction.
    * @summary Fetch Possible Payment Methods with Credentials
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param integrationMode The integration mode defines the type of integration that is applied on the transaction.
    * @param {*} [options] Override http request options.
    */
    fetchPaymentMethodsWithCredentials(credentials, integrationMode, options = {}) {
        const localVarPath = '/transaction/fetch-payment-methods-with-credentials';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'credentials' is not null or undefined
        if (credentials === null || credentials === undefined) {
            throw new Error('Required parameter credentials was null or undefined when calling fetchPaymentMethodsWithCredentials.');
        }
        // verify required parameter 'integrationMode' is not null or undefined
        if (integrationMode === null || integrationMode === undefined) {
            throw new Error('Required parameter integrationMode was null or undefined when calling fetchPaymentMethodsWithCredentials.');
        }
        if (credentials !== undefined) {
            localVarQueryParameters['credentials'] = ObjectSerializer_1.ObjectSerializer.serialize(credentials, "string");
        }
        if (integrationMode !== undefined) {
            localVarQueryParameters['integrationMode'] = ObjectSerializer_1.ObjectSerializer.serialize(integrationMode, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Array<PaymentMethodConfiguration>");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * Returns the PDF document for the transaction invoice with given id.
    * @summary getInvoiceDocument
    * @param spaceId
    * @param id The id of the transaction to get the invoice document for.
    * @param {*} [options] Override http request options.
    */
    getInvoiceDocument(spaceId, id, options = {}) {
        const localVarPath = '/transaction/getInvoiceDocument';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling getInvoiceDocument.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getInvoiceDocument.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer_1.ObjectSerializer.serialize(id, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "RenderedDocument");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    *
    * @summary getLatestSuccessfulTransactionLineItemVersion
    * @param spaceId
    * @param id The id of the transaction to get the latest line item version for.
    * @param {*} [options] Override http request options.
    */
    getLatestTransactionLineItemVersion(spaceId, id, options = {}) {
        const localVarPath = '/transaction/getLatestTransactionLineItemVersion';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling getLatestTransactionLineItemVersion.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLatestTransactionLineItemVersion.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer_1.ObjectSerializer.serialize(id, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "TransactionLineItemVersion");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * Returns the packing slip for the transaction with given id.
    * @summary getPackingSlip
    * @param spaceId
    * @param id The id of the transaction to get the packing slip for.
    * @param {*} [options] Override http request options.
    */
    getPackingSlip(spaceId, id, options = {}) {
        const localVarPath = '/transaction/getPackingSlip';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling getPackingSlip.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPackingSlip.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer_1.ObjectSerializer.serialize(id, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "RenderedDocument");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * This operation assigns the given token to the transaction and process it. This method will return an URL where the customer has to be redirect to complete the transaction.
    * @summary Process One-Click Token with Credentials
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param tokenId The token ID is used to load the corresponding token and to process the transaction with it.
    * @param {*} [options] Override http request options.
    */
    processOneClickTokenAndRedirectWithCredentials(credentials, tokenId, options = {}) {
        const localVarPath = '/transaction/processOneClickTokenAndRedirectWithCredentials';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'credentials' is not null or undefined
        if (credentials === null || credentials === undefined) {
            throw new Error('Required parameter credentials was null or undefined when calling processOneClickTokenAndRedirectWithCredentials.');
        }
        // verify required parameter 'tokenId' is not null or undefined
        if (tokenId === null || tokenId === undefined) {
            throw new Error('Required parameter tokenId was null or undefined when calling processOneClickTokenAndRedirectWithCredentials.');
        }
        if (credentials !== undefined) {
            localVarQueryParameters['credentials'] = ObjectSerializer_1.ObjectSerializer.serialize(credentials, "string");
        }
        if (tokenId !== undefined) {
            localVarQueryParameters['tokenId'] = ObjectSerializer_1.ObjectSerializer.serialize(tokenId, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "string");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * This operation processes the transaction without requiring that the customer is present. Means this operation applies strategies to process the transaction without a direct interaction with the buyer. This operation is suitable for recurring transactions.
    * @summary Process Without User Interaction
    * @param spaceId
    * @param id The id of the transaction which should be processed.
    * @param {*} [options] Override http request options.
    */
    processWithoutUserInteraction(spaceId, id, options = {}) {
        const localVarPath = '/transaction/processWithoutUserInteraction';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling processWithoutUserInteraction.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling processWithoutUserInteraction.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer_1.ObjectSerializer.serialize(id, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Transaction");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the transaction which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId, id, options = {}) {
        const localVarPath = '/transaction/read';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling read.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling read.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer_1.ObjectSerializer.serialize(id, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Transaction");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * Reads the transaction with the given 'id' and returns it. This method uses the credentials to authenticate and identify the transaction.
    * @summary Read With Credentials
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param {*} [options] Override http request options.
    */
    readWithCredentials(credentials, options = {}) {
        const localVarPath = '/transaction/readWithCredentials';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'credentials' is not null or undefined
        if (credentials === null || credentials === undefined) {
            throw new Error('Required parameter credentials was null or undefined when calling readWithCredentials.');
        }
        if (credentials !== undefined) {
            localVarQueryParameters['credentials'] = ObjectSerializer_1.ObjectSerializer.serialize(credentials, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Transaction");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * Searches for the entities as specified by the given query.
    * @summary Search
    * @param spaceId
    * @param query The query restricts the transactions which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId, query, options = {}) {
        const localVarPath = '/transaction/search';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling search.');
        }
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling search.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer_1.ObjectSerializer.serialize(query, "EntityQuery"),
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Array<Transaction>");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
    /**
    * This updates the entity with the given properties. Only those properties which should be updated can be provided. The 'id' and 'version' are required to identify the entity.
    * @summary Update
    * @param spaceId
    * @param entity The transaction object with the properties which should be updated.
    * @param {*} [options] Override http request options.
    */
    update(spaceId, entity, options = {}) {
        const localVarPath = '/transaction/update';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling update.');
        }
        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new Error('Required parameter entity was null or undefined when calling update.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let defaultHeaderParams = {
            "x-meta-sdk-version": "3.2.1",
            "x-meta-sdk-language": "typescript",
            "x-meta-sdk-provider": "PostFinance Checkout",
            "x-meta-sdk-language-version": this.getVersion(),
        };
        Object.assign(localVarHeaderParams, defaultHeaderParams);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            baseUrl: this._basePath,
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer_1.ObjectSerializer.serialize(entity, "TransactionPending"),
            timeout: this._timeout * 1000
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    return reject(error);
                }
                else {
                    if (response.statusCode) {
                        if (response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Transaction");
                            return resolve({ response: response, body: body });
                        }
                        else {
                            let errorObject;
                            if (response.statusCode >= 400 && response.statusCode <= 499) {
                                errorObject = new ClientError_1.ClientError();
                            }
                            else if (response.statusCode >= 500 && response.statusCode <= 599) {
                                errorObject = new ServerError_1.ServerError();
                            }
                            else {
                                errorObject = new Object();
                            }
                            return reject({
                                errorType: errorObject.constructor.name,
                                date: (new Date()).toDateString(),
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage,
                                body: body,
                                response: response
                            });
                        }
                    }
                    return reject({
                        errorType: "Unknown",
                        date: (new Date()).toDateString(),
                        statusCode: "Unknown",
                        statusMessage: "Unknown",
                        body: body,
                        response: response
                    });
                }
            });
        });
    }
}
exports.TransactionService = TransactionService;
