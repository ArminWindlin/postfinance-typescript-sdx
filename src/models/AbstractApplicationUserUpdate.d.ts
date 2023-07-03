import { CreationEntityState } from "./CreationEntityState";
declare class AbstractApplicationUserUpdate {
    /**
    * The user name is used to identify the application user in administrative interfaces.
    */
    'name'?: string;
    /**
    * The request limit defines the maximum number of API request accepted within 2 minutes. This limit can only be changed with special privileges.
    */
    'requestLimit'?: number;
    /**
    *
    */
    'state'?: CreationEntityState;
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
export { AbstractApplicationUserUpdate };
