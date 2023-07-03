import { CreationEntityState } from "./CreationEntityState";
declare class AbstractWebhookUrlUpdate {
    /**
    * The URL name is used internally to identify the URL in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
    */
    'name'?: string;
    /**
    *
    */
    'state'?: CreationEntityState;
    /**
    * The URL to which the HTTP requests are sent to. An example URL could look like https://www.example.com/some/path?some-query-parameter=value.
    */
    'url'?: string;
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
export { AbstractWebhookUrlUpdate };
