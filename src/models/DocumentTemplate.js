'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTemplate = void 0;
class DocumentTemplate {
    static getAttributeTypeMap() {
        return DocumentTemplate.attributeTypeMap;
    }
}
exports.DocumentTemplate = DocumentTemplate;
DocumentTemplate.discriminator = undefined;
DocumentTemplate.attributeTypeMap = [
    {
        "name": "defaultTemplate",
        "baseName": "defaultTemplate",
        "type": "boolean"
    },
    {
        "name": "deliveryEnabled",
        "baseName": "deliveryEnabled",
        "type": "boolean"
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
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
    },
    {
        "name": "spaceId",
        "baseName": "spaceId",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    },
    {
        "name": "templateResource",
        "baseName": "templateResource",
        "type": "ResourcePath"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "number"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
