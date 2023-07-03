'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError {
    static getAttributeTypeMap() {
        return ServerError.attributeTypeMap;
    }
}
exports.ServerError = ServerError;
ServerError.discriminator = undefined;
ServerError.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
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
    }
];
