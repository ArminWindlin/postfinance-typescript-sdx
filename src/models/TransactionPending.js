'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionPending = void 0;
const AbstractTransactionPending_1 = require("./AbstractTransactionPending");
class TransactionPending extends AbstractTransactionPending_1.AbstractTransactionPending {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionPending.attributeTypeMap);
    }
}
exports.TransactionPending = TransactionPending;
TransactionPending.discriminator = undefined;
TransactionPending.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
