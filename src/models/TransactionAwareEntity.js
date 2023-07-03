'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionAwareEntity = void 0;
class TransactionAwareEntity {
    static getAttributeTypeMap() {
        return TransactionAwareEntity.attributeTypeMap;
    }
}
exports.TransactionAwareEntity = TransactionAwareEntity;
TransactionAwareEntity.discriminator = undefined;
TransactionAwareEntity.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
    },
    {
        "name": "linkedTransaction",
        "baseName": "linkedTransaction",
        "type": "number"
    }
];
