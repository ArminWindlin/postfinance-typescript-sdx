'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenVersionType = void 0;
class TokenVersionType {
    static getAttributeTypeMap() {
        return TokenVersionType.attributeTypeMap;
    }
}
exports.TokenVersionType = TokenVersionType;
TokenVersionType.discriminator = undefined;
TokenVersionType.attributeTypeMap = [
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
    }
];
