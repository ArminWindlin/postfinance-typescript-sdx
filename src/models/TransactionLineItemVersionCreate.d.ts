import { LineItemCreate } from "./LineItemCreate";
declare class TransactionLineItemVersionCreate {
    /**
    * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
    */
    'externalId': string;
    /**
    *
    */
    'lineItems': Array<LineItemCreate>;
    /**
    *
    */
    'transaction': number;
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
export { TransactionLineItemVersionCreate };
