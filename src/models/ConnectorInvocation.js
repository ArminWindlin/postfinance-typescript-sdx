'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectorInvocation = void 0;
const TransactionAwareEntity_1 = require("./TransactionAwareEntity");
class ConnectorInvocation extends TransactionAwareEntity_1.TransactionAwareEntity {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ConnectorInvocation.attributeTypeMap);
    }
}
exports.ConnectorInvocation = ConnectorInvocation;
ConnectorInvocation.discriminator = undefined;
ConnectorInvocation.attributeTypeMap = [
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "stage",
        "baseName": "stage",
        "type": "ConnectorInvocationStage"
    },
    {
        "name": "timeTookInMilliseconds",
        "baseName": "timeTookInMilliseconds",
        "type": "number"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
