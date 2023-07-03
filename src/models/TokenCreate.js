'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenCreate = void 0;
const AbstractTokenUpdate_1 = require("./AbstractTokenUpdate");
class TokenCreate extends AbstractTokenUpdate_1.AbstractTokenUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TokenCreate.attributeTypeMap);
    }
}
exports.TokenCreate = TokenCreate;
TokenCreate.discriminator = undefined;
TokenCreate.attributeTypeMap = [
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    }
];
