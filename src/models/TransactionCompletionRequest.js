'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCompletionRequest = void 0;
class TransactionCompletionRequest {
    static getAttributeTypeMap() {
        return TransactionCompletionRequest.attributeTypeMap;
    }
}
exports.TransactionCompletionRequest = TransactionCompletionRequest;
TransactionCompletionRequest.discriminator = undefined;
TransactionCompletionRequest.attributeTypeMap = [
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
    },
    {
        "name": "invoiceMerchantReference",
        "baseName": "invoiceMerchantReference",
        "type": "string"
    },
    {
        "name": "lastCompletion",
        "baseName": "lastCompletion",
        "type": "boolean"
    },
    {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<CompletionLineItemCreate>"
    },
    {
        "name": "statementDescriptor",
        "baseName": "statementDescriptor",
        "type": "string"
    },
    {
        "name": "transactionId",
        "baseName": "transactionId",
        "type": "number"
    }
];
