/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { UserAccountRole } from '../models/UserAccountRole';
declare class UserAccountRoleService {
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
    * This operation grants the role to the given user with in the given account.
    * @summary Add Role
    * @param userId The id of the user to whom the role is assigned.
    * @param accountId The account to which the role is mapped.
    * @param roleId The role which is mapped to the user and account.
    * @param appliesOnSubaccount Whether the role applies only on subaccount.
    * @param {*} [options] Override http request options.
    */
    addRole(userId: number, accountId: number, roleId: number, appliesOnSubaccount?: boolean, options?: any): Promise<{
        response: http.IncomingMessage;
        body: UserAccountRole;
    }>;
    /**
    * List all the roles that are assigned to the given user in the given account.
    * @summary List Roles
    * @param userId The id of the user to whom the role is assigned.
    * @param accountId The account to which the role is mapped.
    * @param {*} [options] Override http request options.
    */
    list(userId: number, accountId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<UserAccountRole>;
    }>;
    /**
    * This operation removes the specified user account role.
    * @summary Remove Role
    * @param id The id of user account role which should be removed
    * @param {*} [options] Override http request options.
    */
    removeRole(id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export { UserAccountRoleService };
