'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTerminalLocation = void 0;
class PaymentTerminalLocation {
    static getAttributeTypeMap() {
        return PaymentTerminalLocation.attributeTypeMap;
    }
}
exports.PaymentTerminalLocation = PaymentTerminalLocation;
PaymentTerminalLocation.discriminator = undefined;
PaymentTerminalLocation.attributeTypeMap = [
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
        "type": "PaymentTerminalLocationState"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
