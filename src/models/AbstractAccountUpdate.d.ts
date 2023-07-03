declare class AbstractAccountUpdate {
    /**
    *
    */
    'lastModifiedDate'?: Date;
    /**
    * The name of the account identifies the account within the administrative interface.
    */
    'name'?: string;
    /**
    * This property restricts the number of subaccounts which can be created within this account.
    */
    'subaccountLimit'?: number;
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
export { AbstractAccountUpdate };
