'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractApplicationUserUpdate = void 0;
class AbstractApplicationUserUpdate {
    static getAttributeTypeMap() {
        return AbstractApplicationUserUpdate.attributeTypeMap;
    }
}
exports.AbstractApplicationUserUpdate = AbstractApplicationUserUpdate;
AbstractApplicationUserUpdate.discriminator = undefined;
AbstractApplicationUserUpdate.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "requestLimit",
        "baseName": "requestLimit",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    }
];
