import { PaymentTerminalAddress } from "./PaymentTerminalAddress";
import { PaymentTerminalLocation } from "./PaymentTerminalLocation";
import { PaymentTerminalLocationVersionState } from "./PaymentTerminalLocationVersionState";
declare class PaymentTerminalLocationVersion {
    /**
    *
    */
    'address'?: PaymentTerminalAddress;
    /**
    *
    */
    'contactAddress'?: PaymentTerminalAddress;
    /**
    *
    */
    'createdBy'?: number;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
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
    'location'?: PaymentTerminalLocation;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'state'?: PaymentTerminalLocationVersionState;
    /**
    * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
    */
    'version'?: number;
    /**
    *
    */
    'versionAppliedImmediately'?: boolean;
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
export { PaymentTerminalLocationVersion };
