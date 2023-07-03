'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccountRole = void 0;
class UserAccountRole {
    static getAttributeTypeMap() {
        return UserAccountRole.attributeTypeMap;
    }
}
exports.UserAccountRole = UserAccountRole;
UserAccountRole.discriminator = undefined;
UserAccountRole.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "number"
    },
    {
        "name": "appliesOnSubAccount",
        "baseName": "appliesOnSubAccount",
        "type": "boolean"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "role",
        "baseName": "role",
        "type": "number"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
