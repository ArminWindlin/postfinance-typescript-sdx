declare class SpaceAddressCreate {
    /**
    *
    */
    'city'?: string;
    /**
    *
    */
    'country'?: string;
    /**
    *
    */
    'dependentLocality'?: string;
    /**
    * The email address is used within emails and as reply to address.
    */
    'emailAddress'?: string;
    /**
    *
    */
    'familyName'?: string;
    /**
    *
    */
    'givenName'?: string;
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
export { SpaceAddressCreate };
