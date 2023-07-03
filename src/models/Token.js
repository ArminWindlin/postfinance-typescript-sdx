'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
class Token {
    static getAttributeTypeMap() {
        return Token.attributeTypeMap;
    }
}
exports.Token = Token;
Token.discriminator = undefined;
Token.attributeTypeMap = [
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "customerEmailAddress",
        "baseName": "customerEmailAddress",
        "type": "string"
    },
    {
        "name": "customerId",
        "baseName": "customerId",
        "type": "string"
    },
    {
        "name": "enabledForOneClickPayment",
        "baseName": "enabledForOneClickPayment",
        "type": "boolean"
    },
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    },
    {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
    },
    {
        "name": "tokenReference",
        "baseName": "tokenReference",
        "type": "string"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
