'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityQuery = void 0;
class EntityQuery {
    static getAttributeTypeMap() {
        return EntityQuery.attributeTypeMap;
    }
}
exports.EntityQuery = EntityQuery;
EntityQuery.discriminator = undefined;
EntityQuery.attributeTypeMap = [
    {
        "name": "filter",
        "baseName": "filter",
        "type": "EntityQueryFilter"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "numberOfEntities",
        "baseName": "numberOfEntities",
        "type": "number"
    },
    {
        "name": "orderBys",
        "baseName": "orderBys",
        "type": "Array<EntityQueryOrderBy>"
    },
    {
        "name": "startingEntity",
        "baseName": "startingEntity",
        "type": "number"
    }
];
