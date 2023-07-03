'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTerminal = void 0;
class PaymentTerminal {
    static getAttributeTypeMap() {
        return PaymentTerminal.attributeTypeMap;
    }
}
exports.PaymentTerminal = PaymentTerminal;
PaymentTerminal.discriminator = undefined;
PaymentTerminal.attributeTypeMap = [
    {
        "name": "configurationVersion",
        "baseName": "configurationVersion",
        "type": "PaymentTerminalConfigurationVersion"
    },
    {
        "name": "defaultCurrency",
        "baseName": "defaultCurrency",
        "type": "string"
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
        "name": "locationVersion",
        "baseName": "locationVersion",
        "type": "PaymentTerminalLocationVersion"
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
        "name": "state",
        "baseName": "state",
        "type": "PaymentTerminalState"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "PaymentTerminalType"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
