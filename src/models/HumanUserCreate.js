'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanUserCreate = void 0;
const AbstractHumanUserUpdate_1 = require("./AbstractHumanUserUpdate");
class HumanUserCreate extends AbstractHumanUserUpdate_1.AbstractHumanUserUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HumanUserCreate.attributeTypeMap);
    }
}
exports.HumanUserCreate = HumanUserCreate;
HumanUserCreate.discriminator = undefined;
HumanUserCreate.attributeTypeMap = [
    {
        "name": "primaryAccount",
        "baseName": "primaryAccount",
        "type": "number"
    }
];
