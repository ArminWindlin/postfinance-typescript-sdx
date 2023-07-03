'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalTransferBankTransaction = void 0;
class ExternalTransferBankTransaction {
    static getAttributeTypeMap() {
        return ExternalTransferBankTransaction.attributeTypeMap;
    }
}
exports.ExternalTransferBankTransaction = ExternalTransferBankTransaction;
ExternalTransferBankTransaction.discriminator = undefined;
ExternalTransferBankTransaction.attributeTypeMap = [
    {
        "name": "bankTransaction",
        "baseName": "bankTransaction",
        "type": "BankTransaction"
    },
    {
        "name": "externalAccountIdentifier",
        "baseName": "externalAccountIdentifier",
        "type": "string"
    },
    {
        "name": "externalAccountType",
        "baseName": "externalAccountType",
        "type": "string"
    },
    {
        "name": "externalBankName",
        "baseName": "externalBankName",
        "type": "string"
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
