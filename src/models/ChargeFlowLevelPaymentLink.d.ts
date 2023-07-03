import { ChargeFlowLevel } from "./ChargeFlowLevel";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
declare class ChargeFlowLevelPaymentLink extends TransactionAwareEntity {
    /**
    *
    */
    'chargeFlowLevel'?: ChargeFlowLevel;
    /**
    *
    */
    'paymentLink'?: string;
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
export { ChargeFlowLevelPaymentLink };
