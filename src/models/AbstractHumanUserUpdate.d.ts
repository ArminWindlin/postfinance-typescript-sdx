import { CreationEntityState } from "./CreationEntityState";
declare class AbstractHumanUserUpdate {
    /**
    * The email address of the user.
    */
    'emailAddress'?: string;
    /**
    * The first name of the user.
    */
    'firstname'?: string;
    /**
    * The preferred language of the user.
    */
    'language'?: string;
    /**
    * The last name of the user.
    */
    'lastname'?: string;
    /**
    *
    */
    'mobilePhoneNumber'?: string;
    /**
    *
    */
    'state'?: CreationEntityState;
    /**
    * The time zone which is applied for the user. If no timezone is specified the browser is used to determine an appropriate time zone.
    */
    'timeZone'?: string;
    /**
    * Defines whether two-factor authentication is enabled for this user.
    */
    'twoFactorEnabled'?: boolean;
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
export { AbstractHumanUserUpdate };
