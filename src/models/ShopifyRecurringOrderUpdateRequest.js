'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyRecurringOrderUpdateRequest = void 0;
class ShopifyRecurringOrderUpdateRequest {
    static getAttributeTypeMap() {
        return ShopifyRecurringOrderUpdateRequest.attributeTypeMap;
    }
}
exports.ShopifyRecurringOrderUpdateRequest = ShopifyRecurringOrderUpdateRequest;
ShopifyRecurringOrderUpdateRequest.discriminator = undefined;
ShopifyRecurringOrderUpdateRequest.attributeTypeMap = [
    {
        "name": "executionDate",
        "baseName": "executionDate",
        "type": "Date"
    },
    {
        "name": "recurringOrderId",
        "baseName": "recurringOrderId",
        "type": "number"
    }
];
