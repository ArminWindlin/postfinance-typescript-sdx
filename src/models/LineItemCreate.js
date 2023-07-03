'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemCreate = void 0;
class LineItemCreate {
    static getAttributeTypeMap() {
        return LineItemCreate.attributeTypeMap;
    }
}
exports.LineItemCreate = LineItemCreate;
LineItemCreate.discriminator = undefined;
LineItemCreate.attributeTypeMap = [
    {
        "name": "amountIncludingTax",
        "baseName": "amountIncludingTax",
        "type": "number"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "{ [key: string]: LineItemAttributeCreate; }"
    },
    {
        "name": "discountIncludingTax",
        "baseName": "discountIncludingTax",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "shippingRequired",
        "baseName": "shippingRequired",
        "type": "boolean"
    },
    {
        "name": "sku",
        "baseName": "sku",
        "type": "string"
    },
    {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<TaxCreate>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "LineItemType"
    },
    {
        "name": "uniqueId",
        "baseName": "uniqueId",
        "type": "string"
    }
];
