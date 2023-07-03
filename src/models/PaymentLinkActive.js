'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinkActive = void 0;
const PaymentLinkUpdate_1 = require("./PaymentLinkUpdate");
class PaymentLinkActive extends PaymentLinkUpdate_1.PaymentLinkUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PaymentLinkActive.attributeTypeMap);
    }
}
exports.PaymentLinkActive = PaymentLinkActive;
PaymentLinkActive.discriminator = undefined;
PaymentLinkActive.attributeTypeMap = [
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    }
];
