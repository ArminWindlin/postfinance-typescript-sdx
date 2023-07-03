'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCommentActive = void 0;
const AbstractCustomerCommentActive_1 = require("./AbstractCustomerCommentActive");
class CustomerCommentActive extends AbstractCustomerCommentActive_1.AbstractCustomerCommentActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CustomerCommentActive.attributeTypeMap);
    }
}
exports.CustomerCommentActive = CustomerCommentActive;
CustomerCommentActive.discriminator = undefined;
CustomerCommentActive.attributeTypeMap = [
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
