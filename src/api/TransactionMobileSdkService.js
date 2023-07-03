'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionMobileSdkService = void 0;
const localVarRequest = require("request");
const Promise = require("bluebird");
const VoidAuth_1 = require("../auth/VoidAuth");
const ObjectSerializer_1 = require("../serializers/ObjectSerializer");
const ClientError_1 = require("../models/ClientError");
const ServerError_1 = require("../models/ServerError");
class TransactionMobileSdkService {
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
    * This operation builds the URL which is used to load the payment form within a WebView on a mobile device. This operation is typically called through the mobile SDK.
    * @summary Build Mobile SDK URL
    * @param credentials The credentials identifies the transaction and contains the security details which grants the access this operation.
    * @param {*} [options] Override http request options.
    */
    paymentFormUrl(credentials, options = {}) {
        const localVarPath = '/transaction-mobile-sdk/payment-form-url';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'credentials' is not null or undefined
        if (credentials === null || credentials === undefined) {
            throw new Error('Required parameter credentials was null or undefined when calling paymentFormUrl.');
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
}
exports.TransactionMobileSdkService = TransactionMobileSdkService;
