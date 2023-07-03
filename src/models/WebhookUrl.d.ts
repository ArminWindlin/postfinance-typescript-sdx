import { CreationEntityState } from "./CreationEntityState";
declare class WebhookUrl {
    /**
    * The webhook URL is managed by the application and cannot be changed via the user interface.
    */
    'applicationManaged'?: boolean;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
    /**
    * The URL name is used internally to identify the URL in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
    */
    'name'?: string;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'state'?: CreationEntityState;
    /**
    * The URL to which the HTTP requests are sent to. An example URL could look like https://www.example.com/some/path?some-query-parameter=value.
    */
    'url'?: string;
    /**
    * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
    */
    'version'?: number;
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
export { WebhookUrl };
