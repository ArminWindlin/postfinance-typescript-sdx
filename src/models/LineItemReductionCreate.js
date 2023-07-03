'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemReductionCreate = void 0;
class LineItemReductionCreate {
    static getAttributeTypeMap() {
        return LineItemReductionCreate.attributeTypeMap;
    }
}
exports.LineItemReductionCreate = LineItemReductionCreate;
LineItemReductionCreate.discriminator = undefined;
LineItemReductionCreate.attributeTypeMap = [
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
