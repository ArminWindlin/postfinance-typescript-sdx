'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureCategory = void 0;
class FeatureCategory {
    static getAttributeTypeMap() {
        return FeatureCategory.attributeTypeMap;
    }
}
exports.FeatureCategory = FeatureCategory;
FeatureCategory.discriminator = undefined;
FeatureCategory.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "orderWeight",
        "baseName": "orderWeight",
        "type": "number"
    }
];
