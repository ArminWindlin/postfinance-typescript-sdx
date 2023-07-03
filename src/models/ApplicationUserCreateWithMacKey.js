'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationUserCreateWithMacKey = void 0;
const ApplicationUser_1 = require("./ApplicationUser");
class ApplicationUserCreateWithMacKey extends ApplicationUser_1.ApplicationUser {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ApplicationUserCreateWithMacKey.attributeTypeMap);
    }
}
exports.ApplicationUserCreateWithMacKey = ApplicationUserCreateWithMacKey;
ApplicationUserCreateWithMacKey.discriminator = undefined;
ApplicationUserCreateWithMacKey.attributeTypeMap = [
    {
        "name": "macKey",
        "baseName": "macKey",
        "type": "string"
    }
];
