import { CreationEntityState } from "./CreationEntityState";
declare class Condition {
    /**
    * The selected condition type defines how the configuration is applied to the transactions.
    */
    'conditionType'?: number;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
    /**
    * The condition name is used internally to identify the condition. For example the name is used within search fields and hence it should be distinct and descriptive.
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
export { Condition };
