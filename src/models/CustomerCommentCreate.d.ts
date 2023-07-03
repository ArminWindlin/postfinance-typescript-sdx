import { AbstractCustomerCommentActive } from "./AbstractCustomerCommentActive";
declare class CustomerCommentCreate extends AbstractCustomerCommentActive {
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
export { CustomerCommentCreate };
