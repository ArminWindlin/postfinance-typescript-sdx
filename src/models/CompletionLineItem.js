'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionLineItem = void 0;
class CompletionLineItem {
    static getAttributeTypeMap() {
        return CompletionLineItem.attributeTypeMap;
    }
}
exports.CompletionLineItem = CompletionLineItem;
CompletionLineItem.discriminator = undefined;
CompletionLineItem.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "uniqueId",
        "baseName": "uniqueId",
        "type": "string"
    }
];
