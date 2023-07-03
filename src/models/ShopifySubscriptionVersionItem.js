'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionVersionItem = void 0;
class ShopifySubscriptionVersionItem {
    static getAttributeTypeMap() {
        return ShopifySubscriptionVersionItem.attributeTypeMap;
    }
}
exports.ShopifySubscriptionVersionItem = ShopifySubscriptionVersionItem;
ShopifySubscriptionVersionItem.discriminator = undefined;
ShopifySubscriptionVersionItem.attributeTypeMap = [
    {
        "name": "priceIncludingTax",
        "baseName": "priceIncludingTax",
        "type": "number"
    },
    {
        "name": "priceStrategy",
        "baseName": "priceStrategy",
        "type": "ShopifySubscriptionVersionItemPriceStrategy"
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "number"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "taxLines",
        "baseName": "taxLines",
        "type": "Array<ShopifyTaxLine>"
    }
];
