'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTerminalType = void 0;
class PaymentTerminalType {
    static getAttributeTypeMap() {
        return PaymentTerminalType.attributeTypeMap;
    }
}
exports.PaymentTerminalType = PaymentTerminalType;
PaymentTerminalType.discriminator = undefined;
PaymentTerminalType.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    }
];
