import { CompletionLineItemCreate } from "./CompletionLineItemCreate";
declare class TransactionCompletionRequest {
    /**
    * The external ID helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
    */
    'externalId': string;
    /**
    *
    */
    'invoiceMerchantReference'?: string;
    /**
    * The last completion flag indicates if this is the last completion. After the last completion is created no further completions can be issued.
    */
    'lastCompletion': boolean;
    /**
    * The line items which will be used to complete the transaction.
    */
    'lineItems'?: Array<CompletionLineItemCreate>;
    /**
    * The statement descriptor explain charges or payments on bank statements.
    */
    'statementDescriptor'?: string;
    /**
    * The ID of the transaction which should be completed.
    */
    'transactionId': number;
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
export { TransactionCompletionRequest };
