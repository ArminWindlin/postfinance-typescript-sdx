declare class SalesChannel {
    /**
    *
    */
    'description'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'icon'?: string;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'name'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'parent'?: SalesChannel;
    /**
    *
    */
    'sortOrder'?: number;
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
export { SalesChannel };
