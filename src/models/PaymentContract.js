'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentContract = void 0;
class PaymentContract {
    static getAttributeTypeMap() {
        return PaymentContract.attributeTypeMap;
    }
}
exports.PaymentContract = PaymentContract;
PaymentContract.discriminator = undefined;
PaymentContract.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "Account"
    },
    {
        "name": "activatedOn",
        "baseName": "activatedOn",
        "type": "Date"
    },
    {
        "name": "contractIdentifier",
        "baseName": "contractIdentifier",
        "type": "string"
    },
    {
        "name": "contractType",
        "baseName": "contractType",
        "type": "PaymentContractType"
    },
    {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "User"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "rejectedOn",
        "baseName": "rejectedOn",
        "type": "Date"
    },
    {
        "name": "rejectionReason",
        "baseName": "rejectionReason",
        "type": "FailureReason"
    },
    {
        "name": "startTerminatingOn",
        "baseName": "startTerminatingOn",
        "type": "Date"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "PaymentContractState"
    },
    {
        "name": "terminatedBy",
        "baseName": "terminatedBy",
        "type": "User"
    },
    {
        "name": "terminatedOn",
        "baseName": "terminatedOn",
        "type": "Date"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
