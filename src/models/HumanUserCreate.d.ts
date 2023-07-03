import { AbstractHumanUserUpdate } from "./AbstractHumanUserUpdate";
declare class HumanUserCreate extends AbstractHumanUserUpdate {
    /**
    * The primary account links the user to a specific account.
    */
    'primaryAccount'?: number;
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
export { HumanUserCreate };
