'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodConfiguration = void 0;
class PaymentMethodConfiguration {
    static getAttributeTypeMap() {
        return PaymentMethodConfiguration.attributeTypeMap;
    }
}
exports.PaymentMethodConfiguration = PaymentMethodConfiguration;
PaymentMethodConfiguration.discriminator = undefined;
PaymentMethodConfiguration.attributeTypeMap = [
    {
        "name": "dataCollectionType",
        "baseName": "dataCollectionType",
        "type": "DataCollectionType"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "DatabaseTranslatedString"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "imageResourcePath",
        "baseName": "imageResourcePath",
        "type": "ResourcePath"
    },
    {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "oneClickPaymentMode",
        "baseName": "oneClickPaymentMode",
        "type": "OneClickPaymentMode"
    },
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "number"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "resolvedDescription",
        "baseName": "resolvedDescription",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "resolvedImageUrl",
        "baseName": "resolvedImageUrl",
        "type": "string"
    },
    {
        "name": "resolvedTitle",
        "baseName": "resolvedTitle",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
    },
    {
        "name": "spaceId",
        "baseName": "spaceId",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "DatabaseTranslatedString"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
