'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalReceiptFetchRequest = void 0;
class TerminalReceiptFetchRequest {
    static getAttributeTypeMap() {
        return TerminalReceiptFetchRequest.attributeTypeMap;
    }
}
exports.TerminalReceiptFetchRequest = TerminalReceiptFetchRequest;
TerminalReceiptFetchRequest.discriminator = undefined;
TerminalReceiptFetchRequest.attributeTypeMap = [
    {
        "name": "format",
        "baseName": "format",
        "type": "TerminalReceiptFormat"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "number"
    },
    {
        "name": "width",
        "baseName": "width",
        "type": "number"
    }
];
