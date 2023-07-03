'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    static getAttributeTypeMap() {
        return Customer.attributeTypeMap;
    }
}
exports.Customer = Customer;
Customer.discriminator = undefined;
Customer.attributeTypeMap = [
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "customerId",
        "baseName": "customerId",
        "type": "string"
    },
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
    },
    {
        "name": "familyName",
        "baseName": "familyName",
        "type": "string"
    },
    {
        "name": "givenName",
        "baseName": "givenName",
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
        "name": "metaData",
        "baseName": "metaData",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "preferredCurrency",
        "baseName": "preferredCurrency",
        "type": "string"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
