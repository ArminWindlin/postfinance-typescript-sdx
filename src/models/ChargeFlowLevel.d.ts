import { ChargeFlowLevelConfiguration } from "./ChargeFlowLevelConfiguration";
import { ChargeFlowLevelState } from "./ChargeFlowLevelState";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
declare class ChargeFlowLevel extends TransactionAwareEntity {
    /**
    *
    */
    'asynchronousCharge'?: number;
    /**
    *
    */
    'configuration'?: ChargeFlowLevelConfiguration;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'state'?: ChargeFlowLevelState;
    /**
    *
    */
    'synchronousCharge'?: number;
    /**
    *
    */
    'timeoutOn'?: Date;
    /**
    *
    */
    'tokenCharge'?: number;
    /**
    *
    */
    'transaction'?: Transaction;
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
export { ChargeFlowLevel };
