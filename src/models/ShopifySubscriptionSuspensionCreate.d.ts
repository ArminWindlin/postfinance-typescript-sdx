import { ShopifySubscriptionSuspensionType } from "./ShopifySubscriptionSuspensionType";
declare class ShopifySubscriptionSuspensionCreate {
    /**
    *
    */
    'plannedEndDate': Date;
    /**
    *
    */
    'subscription': number;
    /**
    *
    */
    'type': ShopifySubscriptionSuspensionType;
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
export { ShopifySubscriptionSuspensionCreate };
