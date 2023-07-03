import { CustomerAddressType } from "./CustomerAddressType";
import { CustomerPostalAddressCreate } from "./CustomerPostalAddressCreate";
declare class AbstractCustomerAddressActive {
    /**
    *
    */
    'address'?: CustomerPostalAddressCreate;
    /**
    *
    */
    'addressType'?: CustomerAddressType;
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
export { AbstractCustomerAddressActive };
