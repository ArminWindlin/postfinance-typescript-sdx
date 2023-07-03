'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientError = void 0;
class ClientError {
    static getAttributeTypeMap() {
        return ClientError.attributeTypeMap;
    }
}
exports.ClientError = ClientError;
ClientError.discriminator = undefined;
ClientError.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "defaultMessage",
        "baseName": "defaultMessage",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ClientErrorType"
    }
];
