'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
class Role {
    static getAttributeTypeMap() {
        return Role.attributeTypeMap;
    }
}
exports.Role = Role;
Role.discriminator = undefined;
Role.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "Account"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "DatabaseTranslatedString"
    },
    {
        "name": "permissions",
        "baseName": "permissions",
        "type": "Array<Permission>"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "RoleState"
    },
    {
        "name": "twoFactorRequired",
        "baseName": "twoFactorRequired",
        "type": "boolean"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
