import { Customer } from "./Customer";
import { CustomerAddressType } from "./CustomerAddressType";
import { CustomerPostalAddress } from "./CustomerPostalAddress";
declare class CustomerAddress {
    /**
    *
    */
    'address'?: CustomerPostalAddress;
    /**
    *
    */
    'addressType'?: CustomerAddressType;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    *
    */
    'customer'?: Customer;
    /**
    *
    */
    'defaultAddress'?: boolean;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
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
export { CustomerAddress };
