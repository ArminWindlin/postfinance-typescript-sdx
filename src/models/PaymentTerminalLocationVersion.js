'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTerminalLocationVersion = void 0;
class PaymentTerminalLocationVersion {
    static getAttributeTypeMap() {
        return PaymentTerminalLocationVersion.attributeTypeMap;
    }
}
exports.PaymentTerminalLocationVersion = PaymentTerminalLocationVersion;
PaymentTerminalLocationVersion.discriminator = undefined;
PaymentTerminalLocationVersion.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "PaymentTerminalAddress"
    },
    {
        "name": "contactAddress",
        "baseName": "contactAddress",
        "type": "PaymentTerminalAddress"
    },
    {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "number"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
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
        "name": "location",
        "baseName": "location",
        "type": "PaymentTerminalLocation"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "PaymentTerminalLocationVersionState"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    },
    {
        "name": "versionAppliedImmediately",
        "baseName": "versionAppliedImmediately",
        "type": "boolean"
    }
];
