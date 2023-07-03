'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceView = void 0;
class SpaceView {
    static getAttributeTypeMap() {
        return SpaceView.attributeTypeMap;
    }
}
exports.SpaceView = SpaceView;
SpaceView.discriminator = undefined;
SpaceView.attributeTypeMap = [
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
        "name": "space",
        "baseName": "space",
        "type": "Space"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    }
];
