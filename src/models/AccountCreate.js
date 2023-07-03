'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreate = void 0;
const AbstractAccountUpdate_1 = require("./AbstractAccountUpdate");
class AccountCreate extends AbstractAccountUpdate_1.AbstractAccountUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AccountCreate.attributeTypeMap);
    }
}
exports.AccountCreate = AccountCreate;
AccountCreate.discriminator = undefined;
AccountCreate.attributeTypeMap = [
    {
        "name": "parentAccount",
        "baseName": "parentAccount",
        "type": "number"
    },
    {
        "name": "scope",
        "baseName": "scope",
        "type": "number"
    }
];
