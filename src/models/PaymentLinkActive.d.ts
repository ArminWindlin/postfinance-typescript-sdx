import { CreationEntityState } from "./CreationEntityState";
import { PaymentLinkUpdate } from "./PaymentLinkUpdate";
declare class PaymentLinkActive extends PaymentLinkUpdate {
    /**
    *
    */
    'state'?: CreationEntityState;
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
export { PaymentLinkActive };
