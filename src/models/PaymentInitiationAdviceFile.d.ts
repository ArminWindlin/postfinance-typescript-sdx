import { PaymentInitiationAdviceFileState } from "./PaymentInitiationAdviceFileState";
import { PaymentProcessor } from "./PaymentProcessor";
declare class PaymentInitiationAdviceFile {
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    *
    */
    'failureMessage'?: string;
    /**
    *
    */
    'fileGeneratedOn'?: Date;
    /**
    * The shipping date indicates the date on which the pain file was transferred to an external processing system.
    */
    'forwardedOn'?: Date;
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
    *
    */
    'processedOn'?: Date;
    /**
    *
    */
    'processor'?: PaymentProcessor;
    /**
    *
    */
    'state'?: PaymentInitiationAdviceFileState;
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
export { PaymentInitiationAdviceFile };
