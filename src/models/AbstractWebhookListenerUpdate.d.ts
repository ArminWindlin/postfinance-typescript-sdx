import { CreationEntityState } from "./CreationEntityState";
declare class AbstractWebhookListenerUpdate {
    /**
    * The target state identifies the state into which entities need to move into to trigger the webhook listener.
    */
    'entityStates'?: Array<string>;
    /**
    * The webhook listener name is used internally to identify the webhook listener in administrative interfaces.For example it is used within search fields and hence it should be distinct and descriptive.
    */
    'name'?: string;
    /**
    * Defines whether the webhook listener is to be informed about every change made to the entity in contrast to state transitions only.
    */
    'notifyEveryChange'?: boolean;
    /**
    *
    */
    'state'?: CreationEntityState;
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
export { AbstractWebhookListenerUpdate };
