declare class AbstractCustomerActive {
    /**
    *
    */
    'customerId'?: string;
    /**
    *
    */
    'emailAddress'?: string;
    /**
    *
    */
    'familyName'?: string;
    /**
    *
    */
    'givenName'?: string;
    /**
    *
    */
    'language'?: string;
    /**
    * Meta data allow to store additional data along the object.
    */
    'metaData'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'preferredCurrency'?: string;
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
export { AbstractCustomerActive };
