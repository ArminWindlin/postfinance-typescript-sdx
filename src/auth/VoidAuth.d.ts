import localVarRequest = require("request");
import { Authentication } from './Authentication';
declare class VoidAuth implements Authentication {
    protected configuration: any;
    protected mac_version: number;
    constructor(configuration: any);
    applyToRequest(requestOptions: localVarRequest.Options): void;
    protected getAuthHeaders(method: string, resourcePath: string, queryParams: any): any;
    protected getSignature(method: string, resourcePath: string, timestamp: number): string;
}
export { VoidAuth };
