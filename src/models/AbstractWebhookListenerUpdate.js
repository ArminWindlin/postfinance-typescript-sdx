'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractWebhookListenerUpdate = void 0;
class AbstractWebhookListenerUpdate {
    static getAttributeTypeMap() {
        return AbstractWebhookListenerUpdate.attributeTypeMap;
    }
}
exports.AbstractWebhookListenerUpdate = AbstractWebhookListenerUpdate;
AbstractWebhookListenerUpdate.discriminator = undefined;
AbstractWebhookListenerUpdate.attributeTypeMap = [
    {
        "name": "entityStates",
        "baseName": "entityStates",
        "type": "Array<string>"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "notifyEveryChange",
        "baseName": "notifyEveryChange",
        "type": "boolean"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
    }
];
