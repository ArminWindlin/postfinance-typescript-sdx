'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxCreate = void 0;
class TaxCreate {
    static getAttributeTypeMap() {
        return TaxCreate.attributeTypeMap;
    }
}
exports.TaxCreate = TaxCreate;
TaxCreate.discriminator = undefined;
TaxCreate.attributeTypeMap = [
    {
        "name": "rate",
        "baseName": "rate",
        "type": "number"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
