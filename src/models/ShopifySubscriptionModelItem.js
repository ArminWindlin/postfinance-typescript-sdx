'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionModelItem = void 0;
class ShopifySubscriptionModelItem {
    static getAttributeTypeMap() {
        return ShopifySubscriptionModelItem.attributeTypeMap;
    }
}
exports.ShopifySubscriptionModelItem = ShopifySubscriptionModelItem;
ShopifySubscriptionModelItem.discriminator = undefined;
ShopifySubscriptionModelItem.attributeTypeMap = [
    {
        "name": "priceIncludingTax",
        "baseName": "priceIncludingTax",
        "type": "number"
    },
    {
        "name": "productId",
        "baseName": "productId",
        "type": "number"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "recalculatePrice",
        "baseName": "recalculatePrice",
        "type": "boolean"
    },
    {
        "name": "taxLines",
        "baseName": "taxLines",
        "type": "Array<ShopifySubscriptionModelTaxLine>"
    }
];
