'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailureReason = void 0;
class FailureReason {
    static getAttributeTypeMap() {
        return FailureReason.attributeTypeMap;
    }
}
exports.FailureReason = FailureReason;
FailureReason.discriminator = undefined;
FailureReason.attributeTypeMap = [
    {
        "name": "category",
        "baseName": "category",
        "type": "FailureCategory"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "features",
        "baseName": "features",
        "type": "Array<number>"
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
    }
];
