import { CreationEntityState } from "./CreationEntityState";
declare class PaymentProcessorConfiguration {
    /**
    * The configuration is managed by the application and cannot be changed via the user interface.
    */
    'applicationManaged'?: boolean;
    /**
    * The contract links the processor configuration with the contract that is used to process payments.
    */
    'contractId'?: number;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
    /**
    * The processor configuration name is used internally to identify a specific processor configuration. For example the name is used within search fields and hence it should be distinct and descriptive.
    */
    'name'?: string;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    * A processor handles the connection to a third part company (a Payment Service Provider) that technically manages the transaction and therefore processes the payment. For the same processor multiple processor configuration can be setup.
    */
    'processor'?: number;
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
export { PaymentProcessorConfiguration };
