'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundCreate = void 0;
class RefundCreate {
    static getAttributeTypeMap() {
        return RefundCreate.attributeTypeMap;
    }
}
exports.RefundCreate = RefundCreate;
RefundCreate.discriminator = undefined;
RefundCreate.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "completion",
        "baseName": "completion",
        "type": "number"
    },
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
    },
    {
        "name": "merchantReference",
        "baseName": "merchantReference",
        "type": "string"
    },
    {
        "name": "reductions",
        "baseName": "reductions",
        "type": "Array<LineItemReductionCreate>"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "RefundType"
    }
];
