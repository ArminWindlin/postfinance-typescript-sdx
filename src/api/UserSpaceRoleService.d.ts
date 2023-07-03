/// <reference types="node" />
import http = require("http");
import Promise = require("bluebird");
import { Authentication } from '../auth/Authentication';
import { UserSpaceRole } from '../models/UserSpaceRole';
declare class UserSpaceRoleService {
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
    * This operation grants the given role to the user in the given space.
    * @summary Add Role
    * @param userId The id of the user to whom the role is assigned.
    * @param spaceId The space to which the role is mapped.
    * @param roleId The role which is mapped to the user and space.
    * @param {*} [options] Override http request options.
    */
    addRole(userId: number, spaceId: number, roleId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: UserSpaceRole;
    }>;
    /**
    * List all the roles that are assigned to the given user in the given space.
    * @summary List Roles
    * @param userId The id of the user to whom the role is assigned.
    * @param spaceId The space to which the role is mapped.
    * @param {*} [options] Override http request options.
    */
    list(userId: number, spaceId: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: Array<UserSpaceRole>;
    }>;
    /**
    * This operation removes the specified user space role.
    * @summary Remove Role
    * @param id The id of user space role which should be removed
    * @param {*} [options] Override http request options.
    */
    removeRole(id: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export { UserSpaceRoleService };
