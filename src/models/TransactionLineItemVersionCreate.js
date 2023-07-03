'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionLineItemVersionCreate = void 0;
class TransactionLineItemVersionCreate {
    static getAttributeTypeMap() {
        return TransactionLineItemVersionCreate.attributeTypeMap;
    }
}
exports.TransactionLineItemVersionCreate = TransactionLineItemVersionCreate;
TransactionLineItemVersionCreate.discriminator = undefined;
TransactionLineItemVersionCreate.attributeTypeMap = [
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
    },
    {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItemCreate>"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "number"
    }
];
