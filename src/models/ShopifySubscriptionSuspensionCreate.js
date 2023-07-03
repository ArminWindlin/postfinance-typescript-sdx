'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifySubscriptionSuspensionCreate = void 0;
class ShopifySubscriptionSuspensionCreate {
    static getAttributeTypeMap() {
        return ShopifySubscriptionSuspensionCreate.attributeTypeMap;
    }
}
exports.ShopifySubscriptionSuspensionCreate = ShopifySubscriptionSuspensionCreate;
ShopifySubscriptionSuspensionCreate.discriminator = undefined;
ShopifySubscriptionSuspensionCreate.attributeTypeMap = [
    {
        "name": "plannedEndDate",
        "baseName": "plannedEndDate",
        "type": "Date"
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ShopifySubscriptionSuspensionType"
    }
];
