'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerComment = void 0;
class CustomerComment {
    static getAttributeTypeMap() {
        return CustomerComment.attributeTypeMap;
    }
}
exports.CustomerComment = CustomerComment;
CustomerComment.discriminator = undefined;
CustomerComment.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "number"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "number"
    },
    {
        "name": "editedBy",
        "baseName": "editedBy",
        "type": "number"
    },
    {
        "name": "editedOn",
        "baseName": "editedOn",
        "type": "Date"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
    },
    {
        "name": "pinned",
        "baseName": "pinned",
        "type": "boolean"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
