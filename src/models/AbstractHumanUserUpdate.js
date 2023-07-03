'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractHumanUserUpdate = void 0;
class AbstractHumanUserUpdate {
    static getAttributeTypeMap() {
        return AbstractHumanUserUpdate.attributeTypeMap;
    }
}
exports.AbstractHumanUserUpdate = AbstractHumanUserUpdate;
AbstractHumanUserUpdate.discriminator = undefined;
AbstractHumanUserUpdate.attributeTypeMap = [
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
    },
    {
        "name": "firstname",
        "baseName": "firstname",
        "type": "string"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "lastname",
        "baseName": "lastname",
        "type": "string"
    },
    {
        "name": "mobilePhoneNumber",
        "baseName": "mobilePhoneNumber",
        "type": "string"
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
        "name": "twoFactorEnabled",
        "baseName": "twoFactorEnabled",
        "type": "boolean"
    }
];
