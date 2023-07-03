import { PaymentTerminalConfiguration } from "./PaymentTerminalConfiguration";
import { PaymentTerminalConfigurationVersionState } from "./PaymentTerminalConfigurationVersionState";
declare class PaymentTerminalConfigurationVersion {
    /**
    *
    */
    'configuration'?: PaymentTerminalConfiguration;
    /**
    *
    */
    'connectorConfigurations'?: Array<number>;
    /**
    *
    */
    'createdBy'?: number;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    * The currency is derived by default from the terminal location. By setting a specific currency the derived currency is overridden.
    */
    'defaultCurrency'?: string;
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
    'maintenanceWindowDuration'?: string;
    /**
    *
    */
    'maintenanceWindowStart'?: string;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'state'?: PaymentTerminalConfigurationVersionState;
    /**
    *
    */
    'timeZone'?: string;
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
export { PaymentTerminalConfigurationVersion };
