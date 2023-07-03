import { LineItemReductionCreate } from "./LineItemReductionCreate";
import { RefundType } from "./RefundType";
declare class RefundCreate {
    /**
    *
    */
    'amount'?: number;
    /**
    *
    */
    'completion'?: number;
    /**
    * The external id helps to identify duplicate calls to the refund service. As such the external ID has to be unique per transaction.
    */
    'externalId': string;
    /**
    *
    */
    'merchantReference'?: string;
    /**
    *
    */
    'reductions'?: Array<LineItemReductionCreate>;
    /**
    *
    */
    'transaction'?: number;
    /**
    *
    */
    'type': RefundType;
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
export { RefundCreate };
