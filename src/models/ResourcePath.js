'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePath = void 0;
class ResourcePath {
    static getAttributeTypeMap() {
        return ResourcePath.attributeTypeMap;
    }
}
exports.ResourcePath = ResourcePath;
ResourcePath.discriminator = undefined;
ResourcePath.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "spaceId",
        "baseName": "spaceId",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "ResourceState"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
