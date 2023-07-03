import { ManualTaskState } from "./ManualTaskState";
declare class ManualTask {
    /**
    *
    */
    'actions'?: Array<number>;
    /**
    * The context entity ID links the manual task to the entity which caused its creation.
    */
    'contextEntityId'?: number;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    * The expiry date indicates until when the manual task has to be executed.
    */
    'expiresOn'?: Date;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
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
    'state'?: ManualTaskState;
    /**
    * The type categorizes the manual task.
    */
    'type'?: number;
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
export { ManualTask };
