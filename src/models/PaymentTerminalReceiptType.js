'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTerminalReceiptType = void 0;
class PaymentTerminalReceiptType {
    static getAttributeTypeMap() {
        return PaymentTerminalReceiptType.attributeTypeMap;
    }
}
exports.PaymentTerminalReceiptType = PaymentTerminalReceiptType;
PaymentTerminalReceiptType.discriminator = undefined;
PaymentTerminalReceiptType.attributeTypeMap = [
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
