'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreate = void 0;
const AbstractCustomerActive_1 = require("./AbstractCustomerActive");
class CustomerCreate extends AbstractCustomerActive_1.AbstractCustomerActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CustomerCreate.attributeTypeMap);
    }
}
exports.CustomerCreate = CustomerCreate;
CustomerCreate.discriminator = undefined;
CustomerCreate.attributeTypeMap = [];
