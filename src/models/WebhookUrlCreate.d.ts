import { AbstractWebhookUrlUpdate } from "./AbstractWebhookUrlUpdate";
declare class WebhookUrlCreate extends AbstractWebhookUrlUpdate {
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
export { WebhookUrlCreate };
