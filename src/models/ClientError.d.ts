import { ClientErrorType } from "./ClientErrorType";
declare class ClientError {
    /**
    * Date when an error has occurred.
    */
    'date'?: string;
    /**
    * The error message which is translated into the default language (i.e. English).
    */
    'defaultMessage'?: string;
    /**
    * Unique identifier of an error.
    */
    'id'?: string;
    /**
    * The error message which is translated in into the language of the client.
    */
    'message'?: string;
    /**
    * The type of the client error.
    */
    'type'?: ClientErrorType;
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
export { ClientError };
