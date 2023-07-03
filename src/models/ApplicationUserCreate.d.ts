import { AbstractApplicationUserUpdate } from "./AbstractApplicationUserUpdate";
declare class ApplicationUserCreate extends AbstractApplicationUserUpdate {
    /**
    * The account that this user is associated with. The account owner will be able to manage this user.
    */
    'primaryAccount': number;
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
export { ApplicationUserCreate };
