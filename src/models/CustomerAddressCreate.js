'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAddressCreate = void 0;
const AbstractCustomerAddressActive_1 = require("./AbstractCustomerAddressActive");
class CustomerAddressCreate extends AbstractCustomerAddressActive_1.AbstractCustomerAddressActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CustomerAddressCreate.attributeTypeMap);
    }
}
exports.CustomerAddressCreate = CustomerAddressCreate;
CustomerAddressCreate.discriminator = undefined;
CustomerAddressCreate.attributeTypeMap = [
    {
        "name": "customer",
        "baseName": "customer",
        "type": "number"
    }
];
