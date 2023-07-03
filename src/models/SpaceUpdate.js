'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceUpdate = void 0;
const AbstractSpaceUpdate_1 = require("./AbstractSpaceUpdate");
class SpaceUpdate extends AbstractSpaceUpdate_1.AbstractSpaceUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SpaceUpdate.attributeTypeMap);
    }
}
exports.SpaceUpdate = SpaceUpdate;
SpaceUpdate.discriminator = undefined;
SpaceUpdate.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
