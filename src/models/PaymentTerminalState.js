'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTerminalState = void 0;
var PaymentTerminalState;
(function (PaymentTerminalState) {
    PaymentTerminalState["CREATE"] = "CREATE";
    PaymentTerminalState["PREPARING"] = "PREPARING";
    PaymentTerminalState["ACTIVE"] = "ACTIVE";
    PaymentTerminalState["INACTIVE"] = "INACTIVE";
    PaymentTerminalState["DECOMMISSIONING"] = "DECOMMISSIONING";
    PaymentTerminalState["DECOMMISSIONED"] = "DECOMMISSIONED";
})(PaymentTerminalState || (PaymentTerminalState = {}));
exports.PaymentTerminalState = PaymentTerminalState;
