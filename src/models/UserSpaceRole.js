'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSpaceRole = void 0;
class UserSpaceRole {
    static getAttributeTypeMap() {
        return UserSpaceRole.attributeTypeMap;
    }
}
exports.UserSpaceRole = UserSpaceRole;
UserSpaceRole.discriminator = undefined;
UserSpaceRole.attributeTypeMap = [
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
        "name": "space",
        "baseName": "space",
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
