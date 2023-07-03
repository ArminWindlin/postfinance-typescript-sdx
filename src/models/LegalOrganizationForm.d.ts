import { LocalizedString } from "./LocalizedString";
declare class LegalOrganizationForm {
    /**
    *
    */
    'country'?: string;
    /**
    *
    */
    'description'?: Array<LocalizedString>;
    /**
    *
    */
    'englishDescription'?: string;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'shortcut'?: Array<LocalizedString>;
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
export { LegalOrganizationForm };
