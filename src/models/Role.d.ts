import { Account } from "./Account";
import { DatabaseTranslatedString } from "./DatabaseTranslatedString";
import { Permission } from "./Permission";
import { RoleState } from "./RoleState";
declare class Role {
    /**
    * The account to which this role belongs to. This role can only be assigned within the assigned account and the sub accounts of the assigned account.
    */
    'account'?: Account;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The name of this role is used to identify the role within administrative interfaces.
    */
    'name'?: DatabaseTranslatedString;
    /**
    * Set of permissions that are granted to this role.
    */
    'permissions'?: Array<Permission>;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'state'?: RoleState;
    /**
    * Defines whether having been granted this role will force a user to use two-factor authentication.
    */
    'twoFactorRequired'?: boolean;
    /**
    * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
    */
    'version'?: number;
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
export { Role };
