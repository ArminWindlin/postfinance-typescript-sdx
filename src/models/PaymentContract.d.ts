import { Account } from "./Account";
import { FailureReason } from "./FailureReason";
import { PaymentContractState } from "./PaymentContractState";
import { PaymentContractType } from "./PaymentContractType";
import { User } from "./User";
declare class PaymentContract {
    /**
    *
    */
    'account'?: Account;
    /**
    *
    */
    'activatedOn'?: Date;
    /**
    *
    */
    'contractIdentifier'?: string;
    /**
    *
    */
    'contractType'?: PaymentContractType;
    /**
    *
    */
    'createdBy'?: User;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
    */
    'externalId'?: string;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'rejectedOn'?: Date;
    /**
    *
    */
    'rejectionReason'?: FailureReason;
    /**
    *
    */
    'startTerminatingOn'?: Date;
    /**
    *
    */
    'state'?: PaymentContractState;
    /**
    *
    */
    'terminatedBy'?: User;
    /**
    *
    */
    'terminatedOn'?: Date;
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
export { PaymentContract };
