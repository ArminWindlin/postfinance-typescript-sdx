'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanUserUpdate = void 0;
const AbstractHumanUserUpdate_1 = require("./AbstractHumanUserUpdate");
class HumanUserUpdate extends AbstractHumanUserUpdate_1.AbstractHumanUserUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HumanUserUpdate.attributeTypeMap);
    }
}
exports.HumanUserUpdate = HumanUserUpdate;
HumanUserUpdate.discriminator = undefined;
HumanUserUpdate.attributeTypeMap = [
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
