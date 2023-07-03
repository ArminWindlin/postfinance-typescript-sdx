'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderedTerminalTransactionSummary = void 0;
class RenderedTerminalTransactionSummary {
    static getAttributeTypeMap() {
        return RenderedTerminalTransactionSummary.attributeTypeMap;
    }
}
exports.RenderedTerminalTransactionSummary = RenderedTerminalTransactionSummary;
RenderedTerminalTransactionSummary.discriminator = undefined;
RenderedTerminalTransactionSummary.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<string>"
    },
    {
        "name": "mimeType",
        "baseName": "mimeType",
        "type": "string"
    }
];
