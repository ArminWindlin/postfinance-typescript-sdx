'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyBankAccount = void 0;
class CurrencyBankAccount {
    static getAttributeTypeMap() {
        return CurrencyBankAccount.attributeTypeMap;
    }
}
exports.CurrencyBankAccount = CurrencyBankAccount;
CurrencyBankAccount.discriminator = undefined;
CurrencyBankAccount.attributeTypeMap = [
    {
        "name": "bankAccount",
        "baseName": "bankAccount",
        "type": "BankAccount"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "environment",
        "baseName": "environment",
        "type": "BankAccountEnvironment"
    },
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
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
