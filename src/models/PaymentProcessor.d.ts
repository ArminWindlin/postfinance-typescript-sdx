declare class PaymentProcessor {
    /**
    *
    */
    'companyName'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'description'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'feature'?: number;
    /**
    *
    */
    'headquartersLocation'?: {
        [key: string]: string;
    };
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'logoPath'?: string;
    /**
    *
    */
    'name'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'productName'?: {
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
export { PaymentProcessor };
