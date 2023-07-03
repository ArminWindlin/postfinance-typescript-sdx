import { ApplicationUser } from "./ApplicationUser";
declare class ApplicationUserCreateWithMacKey extends ApplicationUser {
    /**
    *
    */
    'macKey'?: string;
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
export { ApplicationUserCreateWithMacKey };
