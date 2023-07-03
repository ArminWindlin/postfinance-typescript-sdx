'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feature = void 0;
class Feature {
    static getAttributeTypeMap() {
        return Feature.attributeTypeMap;
    }
}
exports.Feature = Feature;
Feature.discriminator = undefined;
Feature.attributeTypeMap = [
    {
        "name": "beta",
        "baseName": "beta",
        "type": "boolean"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "FeatureCategory"
    },
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
        "name": "logoPath",
        "baseName": "logoPath",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "requiredFeatures",
        "baseName": "requiredFeatures",
        "type": "Array<number>"
    },
    {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
    },
    {
        "name": "visible",
        "baseName": "visible",
        "type": "boolean"
    }
];
