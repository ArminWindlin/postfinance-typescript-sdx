declare class BankAccountType {
    /**
    *
    */
    'description'?: {
        [key: string]: string;
    };
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'identifierName'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'name'?: {
        [key: string]: string;
    };
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
export { BankAccountType };
