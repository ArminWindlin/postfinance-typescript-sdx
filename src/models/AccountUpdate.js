'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdate = void 0;
const AbstractAccountUpdate_1 = require("./AbstractAccountUpdate");
class AccountUpdate extends AbstractAccountUpdate_1.AbstractAccountUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AccountUpdate.attributeTypeMap);
    }
}
exports.AccountUpdate = AccountUpdate;
AccountUpdate.discriminator = undefined;
AccountUpdate.attributeTypeMap = [
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
