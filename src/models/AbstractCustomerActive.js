'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCustomerActive = void 0;
class AbstractCustomerActive {
    static getAttributeTypeMap() {
        return AbstractCustomerActive.attributeTypeMap;
    }
}
exports.AbstractCustomerActive = AbstractCustomerActive;
AbstractCustomerActive.discriminator = undefined;
AbstractCustomerActive.attributeTypeMap = [
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
        "name": "language",
        "baseName": "language",
        "type": "string"
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
    }
];
