'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEnvironmentSelectionStrategy = void 0;
var TransactionEnvironmentSelectionStrategy;
(function (TransactionEnvironmentSelectionStrategy) {
    TransactionEnvironmentSelectionStrategy["FORCE_TEST_ENVIRONMENT"] = "FORCE_TEST_ENVIRONMENT";
    TransactionEnvironmentSelectionStrategy["FORCE_PRODUCTION_ENVIRONMENT"] = "FORCE_PRODUCTION_ENVIRONMENT";
    TransactionEnvironmentSelectionStrategy["USE_CONFIGURATION"] = "USE_CONFIGURATION";
})(TransactionEnvironmentSelectionStrategy || (TransactionEnvironmentSelectionStrategy = {}));
exports.TransactionEnvironmentSelectionStrategy = TransactionEnvironmentSelectionStrategy;
