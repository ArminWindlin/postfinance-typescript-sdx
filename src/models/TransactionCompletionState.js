'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCompletionState = void 0;
var TransactionCompletionState;
(function (TransactionCompletionState) {
    TransactionCompletionState["CREATE"] = "CREATE";
    TransactionCompletionState["SCHEDULED"] = "SCHEDULED";
    TransactionCompletionState["PENDING"] = "PENDING";
    TransactionCompletionState["FAILED"] = "FAILED";
    TransactionCompletionState["SUCCESSFUL"] = "SUCCESSFUL";
})(TransactionCompletionState || (TransactionCompletionState = {}));
exports.TransactionCompletionState = TransactionCompletionState;
