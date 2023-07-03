import { Account } from "./Account";
import { Scope } from "./Scope";
import { TwoFactorAuthenticationType } from "./TwoFactorAuthenticationType";
declare class HumanUser {
    /**
    * The email address of the user.
    */
    'emailAddress'?: string;
    /**
    * Defines whether a user is verified or not.
    */
    'emailAddressVerified'?: boolean;
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
    * Defines whether a users mobile phone number is verified or not.
    */
    'mobilePhoneVerified'?: boolean;
    /**
    * The primary account links the user to a specific account.
    */
    'primaryAccount'?: Account;
    /**
    * The scope to which the user belongs to.
    */
    'scope'?: Scope;
    /**
    * The time zone which is applied for the user. If no timezone is specified the browser is used to determine an appropriate time zone.
    */
    'timeZone'?: string;
    /**
    * Defines whether two-factor authentication is enabled for this user.
    */
    'twoFactorEnabled'?: boolean;
    /**
    *
    */
    'twoFactorType'?: TwoFactorAuthenticationType;
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
export { HumanUser };
