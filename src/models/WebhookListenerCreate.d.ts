import { AbstractWebhookListenerUpdate } from "./AbstractWebhookListenerUpdate";
declare class WebhookListenerCreate extends AbstractWebhookListenerUpdate {
    /**
    * The listener listens on state changes of the entity linked with the listener.
    */
    'entity': number;
    /**
    * The identity which will be used to sign messages sent by this listener.
    */
    'identity'?: number;
    /**
    * The URL which is invoked by the listener to notify the application about the event.
    */
    'url': number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export { WebhookListenerCreate };
