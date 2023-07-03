import { AbstractCustomerAddressActive } from "./AbstractCustomerAddressActive";
declare class CustomerAddressCreate extends AbstractCustomerAddressActive {
    /**
    *
    */
    'customer': number;
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
export { CustomerAddressCreate };
