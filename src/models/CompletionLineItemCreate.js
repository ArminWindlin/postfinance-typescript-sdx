'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionLineItemCreate = void 0;
class CompletionLineItemCreate {
    static getAttributeTypeMap() {
        return CompletionLineItemCreate.attributeTypeMap;
    }
}
exports.CompletionLineItemCreate = CompletionLineItemCreate;
CompletionLineItemCreate.discriminator = undefined;
CompletionLineItemCreate.attributeTypeMap = [
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
