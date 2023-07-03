'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransactionSource = void 0;
class BankTransactionSource {
    static getAttributeTypeMap() {
        return BankTransactionSource.attributeTypeMap;
    }
}
exports.BankTransactionSource = BankTransactionSource;
BankTransactionSource.discriminator = undefined;
BankTransactionSource.attributeTypeMap = [
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
