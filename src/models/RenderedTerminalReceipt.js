'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderedTerminalReceipt = void 0;
class RenderedTerminalReceipt {
    static getAttributeTypeMap() {
        return RenderedTerminalReceipt.attributeTypeMap;
    }
}
exports.RenderedTerminalReceipt = RenderedTerminalReceipt;
RenderedTerminalReceipt.discriminator = undefined;
RenderedTerminalReceipt.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<string>"
    },
    {
        "name": "mimeType",
        "baseName": "mimeType",
        "type": "string"
    },
    {
        "name": "printed",
        "baseName": "printed",
        "type": "boolean"
    },
    {
        "name": "receiptType",
        "baseName": "receiptType",
        "type": "PaymentTerminalReceiptType"
    }
];
