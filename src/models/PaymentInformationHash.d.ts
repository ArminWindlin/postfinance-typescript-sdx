import { PaymentInformationHashType } from "./PaymentInformationHashType";
declare class PaymentInformationHash {
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'type'?: PaymentInformationHashType;
    /**
    *
    */
    'value'?: string;
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
export { PaymentInformationHash };
