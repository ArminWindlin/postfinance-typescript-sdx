'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyTransactionState = void 0;
var ShopifyTransactionState;
(function (ShopifyTransactionState) {
    ShopifyTransactionState["PENDING"] = "PENDING";
    ShopifyTransactionState["AUTHORIZED"] = "AUTHORIZED";
    ShopifyTransactionState["COMPLETED"] = "COMPLETED";
    ShopifyTransactionState["FAILED"] = "FAILED";
    ShopifyTransactionState["CONFLICTING"] = "CONFLICTING";
})(ShopifyTransactionState || (ShopifyTransactionState = {}));
exports.ShopifyTransactionState = ShopifyTransactionState;
