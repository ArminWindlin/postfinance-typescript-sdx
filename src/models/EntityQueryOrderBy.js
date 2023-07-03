'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityQueryOrderBy = void 0;
class EntityQueryOrderBy {
    static getAttributeTypeMap() {
        return EntityQueryOrderBy.attributeTypeMap;
    }
}
exports.EntityQueryOrderBy = EntityQueryOrderBy;
EntityQueryOrderBy.discriminator = undefined;
EntityQueryOrderBy.attributeTypeMap = [
    {
        "name": "fieldName",
        "baseName": "fieldName",
        "type": "string"
    },
    {
        "name": "sorting",
        "baseName": "sorting",
        "type": "EntityQueryOrderByType"
    }
];
