import { AbstractAccountUpdate } from "./AbstractAccountUpdate";
declare class AccountCreate extends AbstractAccountUpdate {
    /**
    * The account which is responsible for administering the account.
    */
    'parentAccount'?: number;
    /**
    * This is the scope to which the account belongs to.
    */
    'scope': number;
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
export { AccountCreate };
