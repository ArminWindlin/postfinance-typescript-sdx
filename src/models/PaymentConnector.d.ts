import { CustomersPresence } from "./CustomersPresence";
import { DataCollectionType } from "./DataCollectionType";
import { Feature } from "./Feature";
import { PaymentMethodBrand } from "./PaymentMethodBrand";
import { PaymentPrimaryRiskTaker } from "./PaymentPrimaryRiskTaker";
declare class PaymentConnector {
    /**
    *
    */
    'dataCollectionType'?: DataCollectionType;
    /**
    *
    */
    'deprecated'?: boolean;
    /**
    *
    */
    'deprecationReason'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'description'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'feature'?: Feature;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'name'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'paymentMethod'?: number;
    /**
    *
    */
    'paymentMethodBrand'?: PaymentMethodBrand;
    /**
    *
    */
    'primaryRiskTaker'?: PaymentPrimaryRiskTaker;
    /**
    *
    */
    'processor'?: number;
    /**
    *
    */
    'supportedCustomersPresences'?: Array<CustomersPresence>;
    /**
    *
    */
    'supportedFeatures'?: Array<number>;
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
export { PaymentConnector };
