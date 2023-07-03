import { AbstractTransactionPending } from "./AbstractTransactionPending";
declare class TransactionPending extends AbstractTransactionPending {
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id': number;
    /**
    * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
    */
    'version': number;
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
export { TransactionPending };
