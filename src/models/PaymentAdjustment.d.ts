import { Tax } from "./Tax";
declare class PaymentAdjustment {
    /**
    *
    */
    'amountExcludingTax'?: number;
    /**
    * The total amount of this adjustment including taxes.
    */
    'amountIncludingTax'?: number;
    /**
    * The rate in percentage is the rate on which the adjustment amount was calculated with.
    */
    'rateInPercentage'?: number;
    /**
    *
    */
    'tax'?: Tax;
    /**
    *
    */
    'type'?: number;
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
export { PaymentAdjustment };
