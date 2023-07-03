'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalTransferBankTransaction = void 0;
class InternalTransferBankTransaction {
    static getAttributeTypeMap() {
        return InternalTransferBankTransaction.attributeTypeMap;
    }
}
exports.InternalTransferBankTransaction = InternalTransferBankTransaction;
InternalTransferBankTransaction.discriminator = undefined;
InternalTransferBankTransaction.attributeTypeMap = [
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
        "name": "sourceBankTransaction",
        "baseName": "sourceBankTransaction",
        "type": "BankTransaction"
    },
    {
        "name": "targetBankTransaction",
        "baseName": "targetBankTransaction",
        "type": "BankTransaction"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
