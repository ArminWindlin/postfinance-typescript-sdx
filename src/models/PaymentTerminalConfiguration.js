'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTerminalConfiguration = void 0;
class PaymentTerminalConfiguration {
    static getAttributeTypeMap() {
        return PaymentTerminalConfiguration.attributeTypeMap;
    }
}
exports.PaymentTerminalConfiguration = PaymentTerminalConfiguration;
PaymentTerminalConfiguration.discriminator = undefined;
PaymentTerminalConfiguration.attributeTypeMap = [
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
        "name": "state",
        "baseName": "state",
        "type": "PaymentTerminalConfigurationState"
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
