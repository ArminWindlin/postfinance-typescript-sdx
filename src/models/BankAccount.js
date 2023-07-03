'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    static getAttributeTypeMap() {
        return BankAccount.attributeTypeMap;
    }
}
exports.BankAccount = BankAccount;
BankAccount.discriminator = undefined;
BankAccount.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "identifier",
        "baseName": "identifier",
        "type": "string"
    },
    {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "BankAccountState"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
