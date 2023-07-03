'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenVersion = void 0;
class TokenVersion {
    static getAttributeTypeMap() {
        return TokenVersion.attributeTypeMap;
    }
}
exports.TokenVersion = TokenVersion;
TokenVersion.discriminator = undefined;
TokenVersion.attributeTypeMap = [
    {
        "name": "activatedOn",
        "baseName": "activatedOn",
        "type": "Date"
    },
    {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "Address"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "environment",
        "baseName": "environment",
        "type": "ChargeAttemptEnvironment"
    },
    {
        "name": "expiresOn",
        "baseName": "expiresOn",
        "type": "Date"
    },
    {
        "name": "iconUrl",
        "baseName": "iconUrl",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "labels",
        "baseName": "labels",
        "type": "Array<Label>"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
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
        "name": "obsoletedOn",
        "baseName": "obsoletedOn",
        "type": "Date"
    },
    {
        "name": "paymentConnectorConfiguration",
        "baseName": "paymentConnectorConfiguration",
        "type": "PaymentConnectorConfiguration"
    },
    {
        "name": "paymentInformationHashes",
        "baseName": "paymentInformationHashes",
        "type": "Array<PaymentInformationHash>"
    },
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "number"
    },
    {
        "name": "paymentMethodBrand",
        "baseName": "paymentMethodBrand",
        "type": "number"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "processorToken",
        "baseName": "processorToken",
        "type": "string"
    },
    {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "Address"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "TokenVersionState"
    },
    {
        "name": "token",
        "baseName": "token",
        "type": "Token"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "TokenVersionType"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
