'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionModelTaxLine = void 0;
class ShopifySubscriptionModelTaxLine {
    static getAttributeTypeMap() {
        return ShopifySubscriptionModelTaxLine.attributeTypeMap;
    }
}
exports.ShopifySubscriptionModelTaxLine = ShopifySubscriptionModelTaxLine;
ShopifySubscriptionModelTaxLine.discriminator = undefined;
ShopifySubscriptionModelTaxLine.attributeTypeMap = [
    {
        "name": "rate",
        "baseName": "rate",
        "type": "number"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
