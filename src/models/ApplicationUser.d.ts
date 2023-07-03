import { Account } from "./Account";
import { User } from "./User";
declare class ApplicationUser extends User {
    /**
    * The user name is used to identify the application user in administrative interfaces.
    */
    'name'?: string;
    /**
    * The account that this user is associated with. The account owner will be able to manage this user.
    */
    'primaryAccount'?: Account;
    /**
    * The request limit defines the maximum number of API request accepted within 2 minutes. This limit can only be changed with special privileges.
    */
    'requestLimit'?: number;
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
export { ApplicationUser };
