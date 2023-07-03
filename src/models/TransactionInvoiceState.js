'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionInvoiceState = void 0;
var TransactionInvoiceState;
(function (TransactionInvoiceState) {
    TransactionInvoiceState["CREATE"] = "CREATE";
    TransactionInvoiceState["OPEN"] = "OPEN";
    TransactionInvoiceState["OVERDUE"] = "OVERDUE";
    TransactionInvoiceState["CANCELED"] = "CANCELED";
    TransactionInvoiceState["PAID"] = "PAID";
    TransactionInvoiceState["DERECOGNIZED"] = "DERECOGNIZED";
    TransactionInvoiceState["NOT_APPLICABLE"] = "NOT_APPLICABLE";
})(TransactionInvoiceState || (TransactionInvoiceState = {}));
exports.TransactionInvoiceState = TransactionInvoiceState;
