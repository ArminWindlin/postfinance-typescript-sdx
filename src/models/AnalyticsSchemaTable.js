'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsSchemaTable = void 0;
class AnalyticsSchemaTable {
    static getAttributeTypeMap() {
        return AnalyticsSchemaTable.attributeTypeMap;
    }
}
exports.AnalyticsSchemaTable = AnalyticsSchemaTable;
AnalyticsSchemaTable.discriminator = undefined;
AnalyticsSchemaTable.attributeTypeMap = [
    {
        "name": "columns",
        "baseName": "columns",
        "type": "Array<AnalyticsSchemaColumn>"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "tableName",
        "baseName": "tableName",
        "type": "string"
    }
];
