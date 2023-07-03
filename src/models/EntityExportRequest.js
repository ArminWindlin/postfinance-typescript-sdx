'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityExportRequest = void 0;
class EntityExportRequest {
    static getAttributeTypeMap() {
        return EntityExportRequest.attributeTypeMap;
    }
}
exports.EntityExportRequest = EntityExportRequest;
EntityExportRequest.discriminator = undefined;
EntityExportRequest.attributeTypeMap = [
    {
        "name": "properties",
        "baseName": "properties",
        "type": "Array<string>"
    },
    {
        "name": "query",
        "baseName": "query",
        "type": "EntityQuery"
    }
];
