'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionProductCreate = void 0;
const AbstractShopifySubscriptionProductUpdate_1 = require("./AbstractShopifySubscriptionProductUpdate");
class ShopifySubscriptionProductCreate extends AbstractShopifySubscriptionProductUpdate_1.AbstractShopifySubscriptionProductUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShopifySubscriptionProductCreate.attributeTypeMap);
    }
}
exports.ShopifySubscriptionProductCreate = ShopifySubscriptionProductCreate;
ShopifySubscriptionProductCreate.discriminator = undefined;
ShopifySubscriptionProductCreate.attributeTypeMap = [
    {
        "name": "productId",
        "baseName": "productId",
        "type": "string"
    },
    {
        "name": "productVariantId",
        "baseName": "productVariantId",
        "type": "string"
    },
    {
        "name": "shop",
        "baseName": "shop",
        "type": "number"
    }
];
