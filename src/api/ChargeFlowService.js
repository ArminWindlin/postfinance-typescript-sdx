'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeFlowService = void 0;
const localVarRequest = require("request");
const Promise = require("bluebird");
const VoidAuth_1 = require("../auth/VoidAuth");
const ObjectSerializer_1 = require("../serializers/ObjectSerializer");
const ClientError_1 = require("../models/ClientError");
const ServerError_1 = require("../models/ServerError");
class ChargeFlowService {
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
    *
    * @summary applyFlow
    * @param spaceId
    * @param id The transaction id of the transaction which should be process asynchronously.
    * @param {*} [options] Override http request options.
    */
    applyFlow(spaceId, id, options = {}) {
        const localVarPath = '/charge-flow/applyFlow';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling applyFlow.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling applyFlow.');
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
    * This operation cancels the charge flow that is linked with the transaction indicated by the given ID.
    * @summary Cancel Charge Flow
    * @param spaceId
    * @param id The ID of the transaction for which the charge flow should be canceled.
    * @param {*} [options] Override http request options.
    */
    cancelChargeFlow(spaceId, id, options = {}) {
        const localVarPath = '/charge-flow/cancel-charge-flow';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling cancelChargeFlow.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling cancelChargeFlow.');
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
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param spaceId
    * @param filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    */
    count(spaceId, filter, options = {}) {
        const localVarPath = '/charge-flow/count';
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
    * This operation allows to fetch the payment page URL that is been applied on the charge flow linked with the provided transaction. The operation might return an empty result when no payment page is needed or can be invoked.
    * @summary Fetch Charge Flow Payment Page URL
    * @param spaceId
    * @param id The transaction id of the transaction for which the URL of the charge flow should be fetched.
    * @param {*} [options] Override http request options.
    */
    fetchChargeFlowPaymentPageUrl(spaceId, id, options = {}) {
        const localVarPath = '/charge-flow/fetch-charge-flow-payment-page-url';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling fetchChargeFlowPaymentPageUrl.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling fetchChargeFlowPaymentPageUrl.');
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
    * Reads the entity with the given 'id' and returns it.
    * @summary Read
    * @param spaceId
    * @param id The id of the charge flow which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId, id, options = {}) {
        const localVarPath = '/charge-flow/read';
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
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "ChargeFlow");
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
    * @param query The query restricts the charge flows which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId, query, options = {}) {
        const localVarPath = '/charge-flow/search';
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
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Array<ChargeFlow>");
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
    * @summary updateRecipient
    * @param spaceId
    * @param transactionId The transaction id of the transaction whose recipient should be updated.
    * @param type The id of the charge flow configuration type to recipient should be updated for.
    * @param recipient The recipient address that should be used to send the payment URL.
    * @param {*} [options] Override http request options.
    */
    updateRecipient(spaceId, transactionId, type, recipient, options = {}) {
        const localVarPath = '/charge-flow/updateRecipient';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling updateRecipient.');
        }
        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling updateRecipient.');
        }
        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling updateRecipient.');
        }
        // verify required parameter 'recipient' is not null or undefined
        if (recipient === null || recipient === undefined) {
            throw new Error('Required parameter recipient was null or undefined when calling updateRecipient.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        if (transactionId !== undefined) {
            localVarQueryParameters['transactionId'] = ObjectSerializer_1.ObjectSerializer.serialize(transactionId, "number");
        }
        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer_1.ObjectSerializer.serialize(type, "number");
        }
        if (recipient !== undefined) {
            localVarQueryParameters['recipient'] = ObjectSerializer_1.ObjectSerializer.serialize(recipient, "string");
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
}
exports.ChargeFlowService = ChargeFlowService;
