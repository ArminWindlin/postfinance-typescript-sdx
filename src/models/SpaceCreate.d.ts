import { AbstractSpaceUpdate } from "./AbstractSpaceUpdate";
declare class SpaceCreate extends AbstractSpaceUpdate {
    /**
    * The account to which the space belongs to.
    */
    'account': number;
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
export { SpaceCreate };
