'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerActive = void 0;
const AbstractCustomerActive_1 = require("./AbstractCustomerActive");
class CustomerActive extends AbstractCustomerActive_1.AbstractCustomerActive {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CustomerActive.attributeTypeMap);
    }
}
exports.CustomerActive = CustomerActive;
CustomerActive.discriminator = undefined;
CustomerActive.attributeTypeMap = [
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
