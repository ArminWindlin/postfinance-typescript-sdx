'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionService = void 0;
const localVarRequest = require("request");
const Promise = require("bluebird");
const VoidAuth_1 = require("../auth/VoidAuth");
const ObjectSerializer_1 = require("../serializers/ObjectSerializer");
const ClientError_1 = require("../models/ClientError");
const ServerError_1 = require("../models/ServerError");
class ShopifySubscriptionService {
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
    * Counts the number of items in the database as restricted by the given filter.
    * @summary Count
    * @param spaceId
    * @param filter The filter which restricts the entities which are used to calculate the count.
    * @param {*} [options] Override http request options.
    */
    count(spaceId, filter, options = {}) {
        const localVarPath = '/shopify-subscription/count';
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
    * This operation allows to create a Shopify subscription.
    * @summary Create
    * @param spaceId
    * @param creationRequest
    * @param {*} [options] Override http request options.
    */
    create(spaceId, creationRequest, options = {}) {
        const localVarPath = '/shopify-subscription/create';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling create.');
        }
        // verify required parameter 'creationRequest' is not null or undefined
        if (creationRequest === null || creationRequest === undefined) {
            throw new Error('Required parameter creationRequest was null or undefined when calling create.');
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
            body: ObjectSerializer_1.ObjectSerializer.serialize(creationRequest, "ShopifySubscriptionCreationRequest"),
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
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "ShopifySubscriptionVersion");
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
    * @param id The id of the Shopify subscription which should be returned.
    * @param {*} [options] Override http request options.
    */
    read(spaceId, id, options = {}) {
        const localVarPath = '/shopify-subscription/read';
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
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "ShopifySubscription");
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
    * @param query The query restricts the Shopify subscriptions which are returned by the search.
    * @param {*} [options] Override http request options.
    */
    search(spaceId, query, options = {}) {
        const localVarPath = '/shopify-subscription/search';
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
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Array<ShopifySubscription>");
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
    * This operation allows to terminate a Shopify subscription.
    * @summary Terminate
    * @param spaceId
    * @param subscriptionId The ID identifies the Shopify subscription which should be terminated.
    * @param respectTerminationPeriod The respect termination period controls whether the termination period configured on the product version should be respected or if the operation should take effect immediately.
    * @param {*} [options] Override http request options.
    */
    terminate(spaceId, subscriptionId, respectTerminationPeriod, options = {}) {
        const localVarPath = '/shopify-subscription/terminate';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling terminate.');
        }
        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error('Required parameter subscriptionId was null or undefined when calling terminate.');
        }
        // verify required parameter 'respectTerminationPeriod' is not null or undefined
        if (respectTerminationPeriod === null || respectTerminationPeriod === undefined) {
            throw new Error('Required parameter respectTerminationPeriod was null or undefined when calling terminate.');
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        if (subscriptionId !== undefined) {
            localVarQueryParameters['subscriptionId'] = ObjectSerializer_1.ObjectSerializer.serialize(subscriptionId, "number");
        }
        if (respectTerminationPeriod !== undefined) {
            localVarQueryParameters['respectTerminationPeriod'] = ObjectSerializer_1.ObjectSerializer.serialize(respectTerminationPeriod, "boolean");
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
    * This operation allows to update a Shopify subscription.
    * @summary Update
    * @param spaceId
    * @param subscription
    * @param {*} [options] Override http request options.
    */
    update(spaceId, subscription, options = {}) {
        const localVarPath = '/shopify-subscription/update';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling update.');
        }
        // verify required parameter 'subscription' is not null or undefined
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling update.');
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
            body: ObjectSerializer_1.ObjectSerializer.serialize(subscription, "ShopifySubscriptionUpdateRequest"),
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
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "ShopifySubscriptionVersion");
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
    * This operation allows to update a Shopify subscription addresses.
    * @summary Update Addresses
    * @param spaceId
    * @param updateRequest
    * @param {*} [options] Override http request options.
    */
    updateAddresses(spaceId, updateRequest, options = {}) {
        const localVarPath = '/shopify-subscription/update-addresses';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling updateAddresses.');
        }
        // verify required parameter 'updateRequest' is not null or undefined
        if (updateRequest === null || updateRequest === undefined) {
            throw new Error('Required parameter updateRequest was null or undefined when calling updateAddresses.');
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
            body: ObjectSerializer_1.ObjectSerializer.serialize(updateRequest, "ShopifySubscriptionUpdateAddressesRequest"),
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
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "ShopifySubscriptionVersion");
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
exports.ShopifySubscriptionService = ShopifySubscriptionService;
