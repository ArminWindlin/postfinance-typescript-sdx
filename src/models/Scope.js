'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scope = void 0;
class Scope {
    static getAttributeTypeMap() {
        return Scope.attributeTypeMap;
    }
}
exports.Scope = Scope;
Scope.discriminator = undefined;
Scope.attributeTypeMap = [
    {
        "name": "domainName",
        "baseName": "domainName",
        "type": "string"
    },
    {
        "name": "features",
        "baseName": "features",
        "type": "Array<Feature>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "machineName",
        "baseName": "machineName",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    },
    {
        "name": "sslActive",
        "baseName": "sslActive",
        "type": "boolean"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    },
    {
        "name": "themes",
        "baseName": "themes",
        "type": "Array<string>"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
