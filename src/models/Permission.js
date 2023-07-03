'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
class Permission {
    static getAttributeTypeMap() {
        return Permission.attributeTypeMap;
    }
}
exports.Permission = Permission;
Permission.discriminator = undefined;
Permission.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "feature",
        "baseName": "feature",
        "type": "number"
    },
    {
        "name": "group",
        "baseName": "group",
        "type": "boolean"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "leaf",
        "baseName": "leaf",
        "type": "boolean"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "parent",
        "baseName": "parent",
        "type": "number"
    },
    {
        "name": "pathToRoot",
        "baseName": "pathToRoot",
        "type": "Array<number>"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "twoFactorRequired",
        "baseName": "twoFactorRequired",
        "type": "boolean"
    },
    {
        "name": "webAppEnabled",
        "baseName": "webAppEnabled",
        "type": "boolean"
    }
];
