'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentConnector = void 0;
class PaymentConnector {
    static getAttributeTypeMap() {
        return PaymentConnector.attributeTypeMap;
    }
}
exports.PaymentConnector = PaymentConnector;
PaymentConnector.discriminator = undefined;
PaymentConnector.attributeTypeMap = [
    {
        "name": "dataCollectionType",
        "baseName": "dataCollectionType",
        "type": "DataCollectionType"
    },
    {
        "name": "deprecated",
        "baseName": "deprecated",
        "type": "boolean"
    },
    {
        "name": "deprecationReason",
        "baseName": "deprecationReason",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
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
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "number"
    },
    {
        "name": "paymentMethodBrand",
        "baseName": "paymentMethodBrand",
        "type": "PaymentMethodBrand"
    },
    {
        "name": "primaryRiskTaker",
        "baseName": "primaryRiskTaker",
        "type": "PaymentPrimaryRiskTaker"
    },
    {
        "name": "processor",
        "baseName": "processor",
        "type": "number"
    },
    {
        "name": "supportedCustomersPresences",
        "baseName": "supportedCustomersPresences",
        "type": "Array<CustomersPresence>"
    },
    {
        "name": "supportedFeatures",
        "baseName": "supportedFeatures",
        "type": "Array<number>"
    }
];
