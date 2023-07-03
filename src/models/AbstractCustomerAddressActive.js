'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCustomerAddressActive = void 0;
class AbstractCustomerAddressActive {
    static getAttributeTypeMap() {
        return AbstractCustomerAddressActive.attributeTypeMap;
    }
}
exports.AbstractCustomerAddressActive = AbstractCustomerAddressActive;
AbstractCustomerAddressActive.discriminator = undefined;
AbstractCustomerAddressActive.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "CustomerPostalAddressCreate"
    },
    {
        "name": "addressType",
        "baseName": "addressType",
        "type": "CustomerAddressType"
    }
];
