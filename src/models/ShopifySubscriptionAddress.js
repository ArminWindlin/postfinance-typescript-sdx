'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionAddress = void 0;
const Address_1 = require("./Address");
class ShopifySubscriptionAddress extends Address_1.Address {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShopifySubscriptionAddress.attributeTypeMap);
    }
}
exports.ShopifySubscriptionAddress = ShopifySubscriptionAddress;
ShopifySubscriptionAddress.discriminator = undefined;
ShopifySubscriptionAddress.attributeTypeMap = [];
