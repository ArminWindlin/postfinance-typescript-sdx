import { Gender } from "./Gender";
import { LegalOrganizationForm } from "./LegalOrganizationForm";
declare class CustomerPostalAddress {
    /**
    *
    */
    'city'?: string;
    /**
    *
    */
    'commercialRegisterNumber'?: string;
    /**
    *
    */
    'country'?: string;
    /**
    *
    */
    'dateOfBirth'?: string;
    /**
    *
    */
    'dependentLocality'?: string;
    /**
    *
    */
    'emailAddress'?: string;
    /**
    *
    */
    'familyName'?: string;
    /**
    *
    */
    'gender'?: Gender;
    /**
    *
    */
    'givenName'?: string;
    /**
    *
    */
    'legalOrganizationForm'?: LegalOrganizationForm;
    /**
    *
    */
    'mobilePhoneNumber'?: string;
    /**
    *
    */
    'organizationName'?: string;
    /**
    *
    */
    'phoneNumber'?: string;
    /**
    *
    */
    'postalState'?: string;
    /**
    *
    */
    'postcode'?: string;
    /**
    *
    */
    'salesTaxNumber'?: string;
    /**
    *
    */
    'salutation'?: string;
    /**
    *
    */
    'socialSecurityNumber'?: string;
    /**
    * The sorting code identifies the post office at which the post box is located in.
    */
    'sortingCode'?: string;
    /**
    *
    */
    'street'?: string;
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
export { CustomerPostalAddress };
