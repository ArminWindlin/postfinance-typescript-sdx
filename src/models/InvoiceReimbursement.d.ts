import { InvoiceReimbursementState } from "./InvoiceReimbursementState";
import { PaymentConnectorConfiguration } from "./PaymentConnectorConfiguration";
import { PaymentInitiationAdviceFile } from "./PaymentInitiationAdviceFile";
declare class InvoiceReimbursement {
    /**
    *
    */
    'amount'?: number;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    *
    */
    'currency'?: string;
    /**
    *
    */
    'discardedBy'?: number;
    /**
    *
    */
    'discardedOn'?: Date;
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
    'paymentConnectorConfiguration'?: PaymentConnectorConfiguration;
    /**
    *
    */
    'paymentInitiationAdviceFile'?: PaymentInitiationAdviceFile;
    /**
    *
    */
    'processedBy'?: number;
    /**
    *
    */
    'processedOn'?: Date;
    /**
    *
    */
    'recipientCity'?: string;
    /**
    *
    */
    'recipientCountry'?: string;
    /**
    *
    */
    'recipientFamilyName'?: string;
    /**
    *
    */
    'recipientGivenName'?: string;
    /**
    *
    */
    'recipientIban'?: string;
    /**
    *
    */
    'recipientPostcode'?: string;
    /**
    *
    */
    'recipientStreet'?: string;
    /**
    *
    */
    'senderIban'?: string;
    /**
    *
    */
    'state'?: InvoiceReimbursementState;
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
export { InvoiceReimbursement };
