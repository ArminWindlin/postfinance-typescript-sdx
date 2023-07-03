import { PaymentTerminalDccTransactionSum } from "./PaymentTerminalDccTransactionSum";
import { PaymentTerminalTransactionSum } from "./PaymentTerminalTransactionSum";
declare class PaymentTerminalTransactionSummary {
    /**
    *
    */
    'dccTransactionSums'?: Array<PaymentTerminalDccTransactionSum>;
    /**
    *
    */
    'endedOn'?: Date;
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
    'numberOfTransactions'?: number;
    /**
    *
    */
    'paymentTerminal'?: number;
    /**
    *
    */
    'receipt'?: string;
    /**
    *
    */
    'startedOn'?: Date;
    /**
    *
    */
    'transactionSums'?: Array<PaymentTerminalTransactionSum>;
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
export { PaymentTerminalTransactionSummary };
