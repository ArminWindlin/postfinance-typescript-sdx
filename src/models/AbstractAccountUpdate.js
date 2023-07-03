'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractAccountUpdate = void 0;
class AbstractAccountUpdate {
    static getAttributeTypeMap() {
        return AbstractAccountUpdate.attributeTypeMap;
    }
}
exports.AbstractAccountUpdate = AbstractAccountUpdate;
AbstractAccountUpdate.discriminator = undefined;
AbstractAccountUpdate.attributeTypeMap = [
    {
        "name": "lastModifiedDate",
        "baseName": "lastModifiedDate",
        "type": "Date"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "subaccountLimit",
        "baseName": "subaccountLimit",
        "type": "number"
    }
];
