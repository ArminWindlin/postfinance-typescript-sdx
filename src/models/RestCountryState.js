'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestCountryState = void 0;
class RestCountryState {
    static getAttributeTypeMap() {
        return RestCountryState.attributeTypeMap;
    }
}
exports.RestCountryState = RestCountryState;
RestCountryState.discriminator = undefined;
RestCountryState.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "countryCode",
        "baseName": "countryCode",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
