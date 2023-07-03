declare class ServerError {
    /**
    * Date when an error has occurred.
    */
    'date'?: string;
    /**
    * Unique identifier of an error.
    */
    'id'?: string;
    /**
    * This message describes an error.
    */
    'message'?: string;
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
export { ServerError };
