'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTokenUpdate = void 0;
class AbstractTokenUpdate {
    static getAttributeTypeMap() {
        return AbstractTokenUpdate.attributeTypeMap;
    }
}
exports.AbstractTokenUpdate = AbstractTokenUpdate;
AbstractTokenUpdate.discriminator = undefined;
AbstractTokenUpdate.attributeTypeMap = [
    {
        "name": "customerEmailAddress",
        "baseName": "customerEmailAddress",
        "type": "string"
    },
    {
        "name": "customerId",
        "baseName": "customerId",
        "type": "string"
    },
    {
        "name": "enabledForOneClickPayment",
        "baseName": "enabledForOneClickPayment",
        "type": "boolean"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
    },
    {
        "name": "tokenReference",
        "baseName": "tokenReference",
        "type": "string"
    }
];
