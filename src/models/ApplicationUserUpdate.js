'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationUserUpdate = void 0;
const AbstractApplicationUserUpdate_1 = require("./AbstractApplicationUserUpdate");
class ApplicationUserUpdate extends AbstractApplicationUserUpdate_1.AbstractApplicationUserUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ApplicationUserUpdate.attributeTypeMap);
    }
}
exports.ApplicationUserUpdate = ApplicationUserUpdate;
ApplicationUserUpdate.discriminator = undefined;
ApplicationUserUpdate.attributeTypeMap = [
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
