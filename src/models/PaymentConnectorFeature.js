'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentConnectorFeature = void 0;
class PaymentConnectorFeature {
    static getAttributeTypeMap() {
        return PaymentConnectorFeature.attributeTypeMap;
    }
}
exports.PaymentConnectorFeature = PaymentConnectorFeature;
PaymentConnectorFeature.discriminator = undefined;
PaymentConnectorFeature.attributeTypeMap = [
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
    },
    {
        "name": "feature",
        "baseName": "feature",
        "type": "Feature"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
