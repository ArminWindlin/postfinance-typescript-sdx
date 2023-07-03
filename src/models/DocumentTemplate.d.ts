import { CreationEntityState } from "./CreationEntityState";
import { ResourcePath } from "./ResourcePath";
declare class DocumentTemplate {
    /**
    * The default document template is used whenever no specific template is specified for a particular template type.
    */
    'defaultTemplate'?: boolean;
    /**
    *
    */
    'deliveryEnabled'?: boolean;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
    /**
    *
    */
    'name'?: string;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'spaceId'?: number;
    /**
    *
    */
    'state'?: CreationEntityState;
    /**
    *
    */
    'templateResource'?: ResourcePath;
    /**
    *
    */
    'type'?: number;
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
export { DocumentTemplate };
