import { BankTransaction } from "./BankTransaction";
declare class ExternalTransferBankTransaction {
    /**
    *
    */
    'bankTransaction'?: BankTransaction;
    /**
    *
    */
    'externalAccountIdentifier'?: string;
    /**
    *
    */
    'externalAccountType'?: string;
    /**
    *
    */
    'externalBankName'?: string;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
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
export { ExternalTransferBankTransaction };
