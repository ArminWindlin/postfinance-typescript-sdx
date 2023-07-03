'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentContractState = void 0;
var PaymentContractState;
(function (PaymentContractState) {
    PaymentContractState["PENDING"] = "PENDING";
    PaymentContractState["ACTIVE"] = "ACTIVE";
    PaymentContractState["TERMINATING"] = "TERMINATING";
    PaymentContractState["TERMINATED"] = "TERMINATED";
    PaymentContractState["REJECTED"] = "REJECTED";
})(PaymentContractState || (PaymentContractState = {}));
exports.PaymentContractState = PaymentContractState;
