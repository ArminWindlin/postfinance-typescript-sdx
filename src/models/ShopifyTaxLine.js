'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyTaxLine = void 0;
class ShopifyTaxLine {
    static getAttributeTypeMap() {
        return ShopifyTaxLine.attributeTypeMap;
    }
}
exports.ShopifyTaxLine = ShopifyTaxLine;
ShopifyTaxLine.discriminator = undefined;
ShopifyTaxLine.attributeTypeMap = [
    {
        "name": "fractionRate",
        "baseName": "fractionRate",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "rate",
        "baseName": "rate",
        "type": "number"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
