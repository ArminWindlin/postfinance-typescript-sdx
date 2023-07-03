'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAddressActive = void 0;
const AbstractCustomerAddressActive_1 = require("./AbstractCustomerAddressActive");
class CustomerAddressActive extends AbstractCustomerAddressActive_1.AbstractCustomerAddressActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CustomerAddressActive.attributeTypeMap);
    }
}
exports.CustomerAddressActive = CustomerAddressActive;
CustomerAddressActive.discriminator = undefined;
CustomerAddressActive.attributeTypeMap = [
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
