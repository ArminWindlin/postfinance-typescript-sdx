'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionProductUpdate = void 0;
const AbstractShopifySubscriptionProductUpdate_1 = require("./AbstractShopifySubscriptionProductUpdate");
class ShopifySubscriptionProductUpdate extends AbstractShopifySubscriptionProductUpdate_1.AbstractShopifySubscriptionProductUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShopifySubscriptionProductUpdate.attributeTypeMap);
    }
}
exports.ShopifySubscriptionProductUpdate = ShopifySubscriptionProductUpdate;
ShopifySubscriptionProductUpdate.discriminator = undefined;
ShopifySubscriptionProductUpdate.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
