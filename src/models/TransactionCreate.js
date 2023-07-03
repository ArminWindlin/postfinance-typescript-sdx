'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreate = void 0;
const AbstractTransactionPending_1 = require("./AbstractTransactionPending");
class TransactionCreate extends AbstractTransactionPending_1.AbstractTransactionPending {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionCreate.attributeTypeMap);
    }
}
exports.TransactionCreate = TransactionCreate;
TransactionCreate.discriminator = undefined;
TransactionCreate.attributeTypeMap = [
    {
        "name": "autoConfirmationEnabled",
        "baseName": "autoConfirmationEnabled",
        "type": "boolean"
    },
    {
        "name": "chargeRetryEnabled",
        "baseName": "chargeRetryEnabled",
        "type": "boolean"
    },
    {
        "name": "customersPresence",
        "baseName": "customersPresence",
        "type": "CustomersPresence"
    },
    {
        "name": "deviceSessionIdentifier",
        "baseName": "deviceSessionIdentifier",
        "type": "string"
    },
    {
        "name": "emailsDisabled",
        "baseName": "emailsDisabled",
        "type": "boolean"
    },
    {
        "name": "environment",
        "baseName": "environment",
        "type": "Environment"
    },
    {
        "name": "environmentSelectionStrategy",
        "baseName": "environmentSelectionStrategy",
        "type": "TransactionEnvironmentSelectionStrategy"
    },
    {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
    }
];
