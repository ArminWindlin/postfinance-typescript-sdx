import { CreationEntityState } from "./CreationEntityState";
import { SpaceAddressCreate } from "./SpaceAddressCreate";
declare class AbstractSpaceUpdate {
    /**
    *
    */
    'lastModifiedDate'?: Date;
    /**
    * The space name is used internally to identify the space in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
    */
    'name'?: string;
    /**
    * The address to use in communication with clients for example in email, documents etc.
    */
    'postalAddress'?: SpaceAddressCreate;
    /**
    * This is the currency that is used to display aggregated amounts in the space.
    */
    'primaryCurrency'?: string;
    /**
    * The request limit defines the maximum number of API request accepted within 2 minutes for this space. This limit can only be changed with special privileges.
    */
    'requestLimit'?: number;
    /**
    *
    */
    'state'?: CreationEntityState;
    /**
    * The email address provided as contact addresses will be informed about technical issues or errors triggered by the space.
    */
    'technicalContactAddresses'?: Array<string>;
    /**
    * The time zone assigned to the space determines the time offset for calculating dates within the space. This is typically used for background processed which needs to be triggered on a specific hour within the day. Changing the space time zone will not change the display of dates.
    */
    'timeZone'?: string;
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
export { AbstractSpaceUpdate };
