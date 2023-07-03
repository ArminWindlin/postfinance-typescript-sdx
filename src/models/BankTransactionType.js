'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransactionType = void 0;
class BankTransactionType {
    static getAttributeTypeMap() {
        return BankTransactionType.attributeTypeMap;
    }
}
exports.BankTransactionType = BankTransactionType;
BankTransactionType.discriminator = undefined;
BankTransactionType.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    }
];
