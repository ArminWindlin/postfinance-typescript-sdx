'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceCreate = void 0;
const AbstractSpaceUpdate_1 = require("./AbstractSpaceUpdate");
class SpaceCreate extends AbstractSpaceUpdate_1.AbstractSpaceUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SpaceCreate.attributeTypeMap);
    }
}
exports.SpaceCreate = SpaceCreate;
SpaceCreate.discriminator = undefined;
SpaceCreate.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "number"
    }
];
