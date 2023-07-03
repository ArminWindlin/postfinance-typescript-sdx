'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityQueryFilter = void 0;
class EntityQueryFilter {
    static getAttributeTypeMap() {
        return EntityQueryFilter.attributeTypeMap;
    }
}
exports.EntityQueryFilter = EntityQueryFilter;
EntityQueryFilter.discriminator = undefined;
EntityQueryFilter.attributeTypeMap = [
    {
        "name": "children",
        "baseName": "children",
        "type": "Array<EntityQueryFilter>"
    },
    {
        "name": "fieldName",
        "baseName": "fieldName",
        "type": "string"
    },
    {
        "name": "operator",
        "baseName": "operator",
        "type": "CriteriaOperator"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "EntityQueryFilterType"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "any"
    }
];
