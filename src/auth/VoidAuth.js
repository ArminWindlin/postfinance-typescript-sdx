'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = void 0;
const CryptoJS = require("crypto-js");
class VoidAuth {
    constructor(configuration) {
        this.configuration = {};
        this.mac_version = 1;
        this.configuration = configuration;
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            Object.assign(requestOptions.headers, this.getAuthHeaders(requestOptions.method, requestOptions.uri, requestOptions.qs));
        }
    }
    getAuthHeaders(method, resourcePath, queryParams) {
        if (Object.keys(queryParams).length != 0) {
            resourcePath += '?' + Object.keys(queryParams).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key]);
            }).join('&');
        }
        resourcePath = '/api' + resourcePath;
        let timestamp = Math.trunc(+new Date / 1000);
        let headers = {
            'x-mac-userid': this.configuration.user_id,
            'x-mac-version': this.mac_version,
            'x-mac-timestamp': timestamp,
            'x-mac-value': this.getSignature(method, resourcePath, timestamp)
        };
        return headers;
    }
    getSignature(method, resourcePath, timestamp) {
        let data = [
            this.mac_version,
            this.configuration.user_id,
            timestamp,
            method,
            resourcePath
        ].join('|');
        let api_secret_base64 = CryptoJS.enc.Base64.parse(this.configuration.api_secret);
        return CryptoJS.HmacSHA512(data, api_secret_base64).toString(CryptoJS.enc.Base64);
    }
}
exports.VoidAuth = VoidAuth;
