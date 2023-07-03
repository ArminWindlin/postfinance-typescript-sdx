'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinkCreate = void 0;
const AbstractPaymentLinkUpdate_1 = require("./AbstractPaymentLinkUpdate");
class PaymentLinkCreate extends AbstractPaymentLinkUpdate_1.AbstractPaymentLinkUpdate {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PaymentLinkCreate.attributeTypeMap);
    }
}
exports.PaymentLinkCreate = PaymentLinkCreate;
PaymentLinkCreate.discriminator = undefined;
PaymentLinkCreate.attributeTypeMap = [
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    },
    {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
    },
    {
        "name": "protectionMode",
        "baseName": "protectionMode",
        "type": "PaymentLinkProtectionMode"
    }
];
