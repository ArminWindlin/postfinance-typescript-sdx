'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeAttempt = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class ChargeAttempt extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChargeAttempt.attributeTypeMap);
    }
}
exports.ChargeAttempt = ChargeAttempt;
ChargeAttempt.discriminator = undefined;
ChargeAttempt.attributeTypeMap = [
    {
        "name": "charge",
        "baseName": "charge",
        "type": "Charge"
    },
    {
        "name": "completionBehavior",
        "baseName": "completionBehavior",
        "type": "TransactionCompletionBehavior"
    },
    {
        "name": "connectorConfiguration",
        "baseName": "connectorConfiguration",
        "type": "PaymentConnectorConfiguration"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "customersPresence",
        "baseName": "customersPresence",
        "type": "CustomersPresence"
    },
    {
        "name": "environment",
        "baseName": "environment",
        "type": "ChargeAttemptEnvironment"
    },
    {
        "name": "failedOn",
        "baseName": "failedOn",
        "type": "Date"
    },
    {
        "name": "failureReason",
        "baseName": "failureReason",
        "type": "FailureReason"
    },
    {
        "name": "initializingTokenVersion",
        "baseName": "initializingTokenVersion",
        "type": "boolean"
    },
    {
        "name": "invocation",
        "baseName": "invocation",
        "type": "ConnectorInvocation"
    },
    {
        "name": "labels",
        "baseName": "labels",
        "type": "Array<Label>"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "nextUpdateOn",
        "baseName": "nextUpdateOn",
        "type": "Date"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "redirectionUrl",
        "baseName": "redirectionUrl",
        "type": "string"
    },
    {
        "name": "salesChannel",
        "baseName": "salesChannel",
        "type": "number"
    },
    {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "ChargeAttemptState"
    },
    {
        "name": "succeededOn",
        "baseName": "succeededOn",
        "type": "Date"
    },
    {
        "name": "terminal",
        "baseName": "terminal",
        "type": "PaymentTerminal"
    },
    {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
    },
    {
        "name": "timeoutOn",
        "baseName": "timeoutOn",
        "type": "Date"
    },
    {
        "name": "tokenVersion",
        "baseName": "tokenVersion",
        "type": "TokenVersion"
    },
    {
        "name": "userFailureMessage",
        "baseName": "userFailureMessage",
        "type": "string"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    },
    {
        "name": "walletType",
        "baseName": "walletType",
        "type": "WalletType"
    }
];
