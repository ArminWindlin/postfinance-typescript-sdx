'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationUser = void 0;
const User_1 = require("./User");
class ApplicationUser extends User_1.User {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ApplicationUser.attributeTypeMap);
    }
}
exports.ApplicationUser = ApplicationUser;
ApplicationUser.discriminator = undefined;
ApplicationUser.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "primaryAccount",
        "baseName": "primaryAccount",
        "type": "Account"
    },
    {
        "name": "requestLimit",
        "baseName": "requestLimit",
        "type": "number"
    }
];
