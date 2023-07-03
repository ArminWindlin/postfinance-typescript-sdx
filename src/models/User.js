'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}
exports.User = User;
User.discriminator = undefined;
User.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "scope",
        "baseName": "scope",
        "type": "Scope"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    },
    {
        "name": "userType",
        "baseName": "userType",
        "type": "UserType"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
