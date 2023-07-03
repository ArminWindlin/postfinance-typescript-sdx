'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryIndicationDecisionReason = void 0;
class DeliveryIndicationDecisionReason {
    static getAttributeTypeMap() {
        return DeliveryIndicationDecisionReason.attributeTypeMap;
    }
}
exports.DeliveryIndicationDecisionReason = DeliveryIndicationDecisionReason;
DeliveryIndicationDecisionReason.discriminator = undefined;
DeliveryIndicationDecisionReason.attributeTypeMap = [
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
