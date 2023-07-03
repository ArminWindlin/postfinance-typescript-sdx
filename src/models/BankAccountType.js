'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountType = void 0;
class BankAccountType {
    static getAttributeTypeMap() {
        return BankAccountType.attributeTypeMap;
    }
}
exports.BankAccountType = BankAccountType;
BankAccountType.discriminator = undefined;
BankAccountType.attributeTypeMap = [
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
        "name": "identifierName",
        "baseName": "identifierName",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    }
];
