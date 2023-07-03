'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSpaceRoleService = void 0;
const localVarRequest = require("request");
const Promise = require("bluebird");
const VoidAuth_1 = require("../auth/VoidAuth");
const ObjectSerializer_1 = require("../serializers/ObjectSerializer");
const ClientError_1 = require("../models/ClientError");
const ServerError_1 = require("../models/ServerError");
class UserSpaceRoleService {
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
    * This operation grants the given role to the user in the given space.
    * @summary Add Role
    * @param userId The id of the user to whom the role is assigned.
    * @param spaceId The space to which the role is mapped.
    * @param roleId The role which is mapped to the user and space.
    * @param {*} [options] Override http request options.
    */
    addRole(userId, spaceId, roleId, options = {}) {
        const localVarPath = '/user-space-role/addRole';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addRole.');
        }
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling addRole.');
        }
        // verify required parameter 'roleId' is not null or undefined
        if (roleId === null || roleId === undefined) {
            throw new Error('Required parameter roleId was null or undefined when calling addRole.');
        }
        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer_1.ObjectSerializer.serialize(userId, "number");
        }
        if (spaceId !== undefined) {
            localVarQueryParameters['spaceId'] = ObjectSerializer_1.ObjectSerializer.serialize(spaceId, "number");
        }
        if (roleId !== undefined) {
            localVarQueryParameters['roleId'] = ObjectSerializer_1.ObjectSerializer.serialize(roleId, "number");
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
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "UserSpaceRole");
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
    * List all the roles that are assigned to the given user in the given space.
    * @summary List Roles
    * @param userId The id of the user to whom the role is assigned.
    * @param spaceId The space to which the role is mapped.
    * @param {*} [options] Override http request options.
    */
    list(userId, spaceId, options = {}) {
        const localVarPath = '/user-space-role/list';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling list.');
        }
        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error('Required parameter spaceId was null or undefined when calling list.');
        }
        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer_1.ObjectSerializer.serialize(userId, "number");
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
                            body = ObjectSerializer_1.ObjectSerializer.deserialize(body, "Array<UserSpaceRole>");
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
    * This operation removes the specified user space role.
    * @summary Remove Role
    * @param id The id of user space role which should be removed
    * @param {*} [options] Override http request options.
    */
    removeRole(id, options = {}) {
        const localVarPath = '/user-space-role/removeRole';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeRole.');
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
exports.UserSpaceRoleService = UserSpaceRoleService;
