'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFactorAuthenticationType = void 0;
class TwoFactorAuthenticationType {
    static getAttributeTypeMap() {
        return TwoFactorAuthenticationType.attributeTypeMap;
    }
}
exports.TwoFactorAuthenticationType = TwoFactorAuthenticationType;
TwoFactorAuthenticationType.discriminator = undefined;
TwoFactorAuthenticationType.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "feature",
        "baseName": "feature",
        "type": "number"
    },
    {
        "name": "icon",
        "baseName": "icon",
        "type": "string"
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
