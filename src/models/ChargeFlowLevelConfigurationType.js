'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeFlowLevelConfigurationType = void 0;
class ChargeFlowLevelConfigurationType {
    static getAttributeTypeMap() {
        return ChargeFlowLevelConfigurationType.attributeTypeMap;
    }
}
exports.ChargeFlowLevelConfigurationType = ChargeFlowLevelConfigurationType;
ChargeFlowLevelConfigurationType.discriminator = undefined;
ChargeFlowLevelConfigurationType.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "label",
        "baseName": "label",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
    }
];
