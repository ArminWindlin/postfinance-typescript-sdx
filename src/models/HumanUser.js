'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanUser = void 0;
class HumanUser {
    static getAttributeTypeMap() {
        return HumanUser.attributeTypeMap;
    }
}
exports.HumanUser = HumanUser;
HumanUser.discriminator = undefined;
HumanUser.attributeTypeMap = [
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
    },
    {
        "name": "emailAddressVerified",
        "baseName": "emailAddressVerified",
        "type": "boolean"
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
        "name": "mobilePhoneVerified",
        "baseName": "mobilePhoneVerified",
        "type": "boolean"
    },
    {
        "name": "primaryAccount",
        "baseName": "primaryAccount",
        "type": "Account"
    },
    {
        "name": "scope",
        "baseName": "scope",
        "type": "Scope"
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
    },
    {
        "name": "twoFactorType",
        "baseName": "twoFactorType",
        "type": "TwoFactorAuthenticationType"
    }
];
