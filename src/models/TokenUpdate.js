'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenUpdate = void 0;
const AbstractTokenUpdate_1 = require("./AbstractTokenUpdate");
class TokenUpdate extends AbstractTokenUpdate_1.AbstractTokenUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TokenUpdate.attributeTypeMap);
    }
}
exports.TokenUpdate = TokenUpdate;
TokenUpdate.discriminator = undefined;
TokenUpdate.attributeTypeMap = [
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
