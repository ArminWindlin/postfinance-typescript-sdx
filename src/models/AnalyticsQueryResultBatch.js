'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsQueryResultBatch = void 0;
class AnalyticsQueryResultBatch {
    static getAttributeTypeMap() {
        return AnalyticsQueryResultBatch.attributeTypeMap;
    }
}
exports.AnalyticsQueryResultBatch = AnalyticsQueryResultBatch;
AnalyticsQueryResultBatch.discriminator = undefined;
AnalyticsQueryResultBatch.attributeTypeMap = [
    {
        "name": "columns",
        "baseName": "columns",
        "type": "Array<AnalyticsSchemaColumn>"
    },
    {
        "name": "nextToken",
        "baseName": "nextToken",
        "type": "string"
    },
    {
        "name": "queryExecution",
        "baseName": "queryExecution",
        "type": "AnalyticsQueryExecution"
    },
    {
        "name": "rows",
        "baseName": "rows",
        "type": "Array<Array<string>>"
    }
];
