'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryIndication = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class DeliveryIndication extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DeliveryIndication.attributeTypeMap);
    }
}
exports.DeliveryIndication = DeliveryIndication;
DeliveryIndication.discriminator = undefined;
DeliveryIndication.attributeTypeMap = [
    {
        "name": "automaticDecisionReason",
        "baseName": "automaticDecisionReason",
        "type": "DeliveryIndicationDecisionReason"
    },
    {
        "name": "automaticallyDecidedOn",
        "baseName": "automaticallyDecidedOn",
        "type": "Date"
    },
    {
        "name": "completion",
        "baseName": "completion",
        "type": "number"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "manualDecisionTimeoutOn",
        "baseName": "manualDecisionTimeoutOn",
        "type": "Date"
    },
    {
        "name": "manuallyDecidedBy",
        "baseName": "manuallyDecidedBy",
        "type": "number"
    },
    {
        "name": "manuallyDecidedOn",
        "baseName": "manuallyDecidedOn",
        "type": "Date"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "DeliveryIndicationState"
    },
    {
        "name": "timeoutOn",
        "baseName": "timeoutOn",
        "type": "Date"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
    }
];
