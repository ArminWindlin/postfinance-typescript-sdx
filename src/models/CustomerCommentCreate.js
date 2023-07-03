'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCommentCreate = void 0;
const AbstractCustomerCommentActive_1 = require("./AbstractCustomerCommentActive");
class CustomerCommentCreate extends AbstractCustomerCommentActive_1.AbstractCustomerCommentActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CustomerCommentCreate.attributeTypeMap);
    }
}
exports.CustomerCommentCreate = CustomerCommentCreate;
CustomerCommentCreate.discriminator = undefined;
CustomerCommentCreate.attributeTypeMap = [
    {
        "name": "customer",
        "baseName": "customer",
        "type": "number"
    }
];
