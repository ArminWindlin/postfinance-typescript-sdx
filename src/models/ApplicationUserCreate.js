'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationUserCreate = void 0;
const AbstractApplicationUserUpdate_1 = require("./AbstractApplicationUserUpdate");
class ApplicationUserCreate extends AbstractApplicationUserUpdate_1.AbstractApplicationUserUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ApplicationUserCreate.attributeTypeMap);
    }
}
exports.ApplicationUserCreate = ApplicationUserCreate;
ApplicationUserCreate.discriminator = undefined;
ApplicationUserCreate.attributeTypeMap = [
    {
        "name": "primaryAccount",
        "baseName": "primaryAccount",
        "type": "number"
    }
];
