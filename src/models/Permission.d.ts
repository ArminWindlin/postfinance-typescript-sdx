declare class Permission {
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
    'group'?: boolean;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'leaf'?: boolean;
    /**
    *
    */
    'name'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'parent'?: number;
    /**
    *
    */
    'pathToRoot'?: Array<number>;
    /**
    *
    */
    'title'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'twoFactorRequired'?: boolean;
    /**
    *
    */
    'webAppEnabled'?: boolean;
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
export { Permission };
