'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsQuery = void 0;
class AnalyticsQuery {
    static getAttributeTypeMap() {
        return AnalyticsQuery.attributeTypeMap;
    }
}
exports.AnalyticsQuery = AnalyticsQuery;
AnalyticsQuery.discriminator = undefined;
AnalyticsQuery.attributeTypeMap = [
    {
        "name": "accountId",
        "baseName": "accountId",
        "type": "number"
    },
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
    },
    {
        "name": "maxCacheAge",
        "baseName": "maxCacheAge",
        "type": "number"
    },
    {
        "name": "queryString",
        "baseName": "queryString",
        "type": "string"
    },
    {
        "name": "scannedDataLimit",
        "baseName": "scannedDataLimit",
        "type": "number"
    },
    {
        "name": "spaceIds",
        "baseName": "spaceIds",
        "type": "Array<number>"
    }
];
