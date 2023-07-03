'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemReduction = void 0;
class LineItemReduction {
    static getAttributeTypeMap() {
        return LineItemReduction.attributeTypeMap;
    }
}
exports.LineItemReduction = LineItemReduction;
LineItemReduction.discriminator = undefined;
LineItemReduction.attributeTypeMap = [
    {
        "name": "lineItemUniqueId",
        "baseName": "lineItemUniqueId",
        "type": "string"
    },
    {
        "name": "quantityReduction",
        "baseName": "quantityReduction",
        "type": "number"
    },
    {
        "name": "unitPriceReduction",
        "baseName": "unitPriceReduction",
        "type": "number"
    }
];
