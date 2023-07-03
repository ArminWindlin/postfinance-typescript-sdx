'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantDatabase = void 0;
class TenantDatabase {
    static getAttributeTypeMap() {
        return TenantDatabase.attributeTypeMap;
    }
}
exports.TenantDatabase = TenantDatabase;
TenantDatabase.discriminator = undefined;
TenantDatabase.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
