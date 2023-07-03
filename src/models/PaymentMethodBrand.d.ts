declare class PaymentMethodBrand {
    /**
    *
    */
    'description'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'grayImagePath'?: string;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'imagePath'?: string;
    /**
    *
    */
    'name'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'paymentMethod'?: number;
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
export { PaymentMethodBrand };
