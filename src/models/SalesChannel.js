'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesChannel = void 0;
class SalesChannel {
    static getAttributeTypeMap() {
        return SalesChannel.attributeTypeMap;
    }
}
exports.SalesChannel = SalesChannel;
SalesChannel.discriminator = undefined;
SalesChannel.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "icon",
        "baseName": "icon",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "parent",
        "baseName": "parent",
        "type": "SalesChannel"
    },
    {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
    }
];
