'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessorConfiguration = void 0;
class PaymentProcessorConfiguration {
    static getAttributeTypeMap() {
        return PaymentProcessorConfiguration.attributeTypeMap;
    }
}
exports.PaymentProcessorConfiguration = PaymentProcessorConfiguration;
PaymentProcessorConfiguration.discriminator = undefined;
PaymentProcessorConfiguration.attributeTypeMap = [
    {
        "name": "applicationManaged",
        "baseName": "applicationManaged",
        "type": "boolean"
    },
    {
        "name": "contractId",
        "baseName": "contractId",
        "type": "number"
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
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "processor",
        "baseName": "processor",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
