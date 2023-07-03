import { ShopifySubscription } from "./ShopifySubscription";
import { ShopifySubscriptionSuspensionInitiator } from "./ShopifySubscriptionSuspensionInitiator";
import { ShopifySubscriptionSuspensionState } from "./ShopifySubscriptionSuspensionState";
import { ShopifySubscriptionSuspensionType } from "./ShopifySubscriptionSuspensionType";
declare class ShopifySubscriptionSuspension {
    /**
    *
    */
    'createdBy'?: number;
    /**
    *
    */
    'createdOn'?: Date;
    /**
    *
    */
    'endedBy'?: number;
    /**
    *
    */
    'endedOn'?: Date;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'initiator'?: ShopifySubscriptionSuspensionInitiator;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
    /**
    *
    */
    'plannedEndDate'?: Date;
    /**
    *
    */
    'shop'?: number;
    /**
    *
    */
    'state'?: ShopifySubscriptionSuspensionState;
    /**
    *
    */
    'subscription'?: ShopifySubscription;
    /**
    *
    */
    'type'?: ShopifySubscriptionSuspensionType;
    /**
    * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
    */
    'version'?: number;
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
export { ShopifySubscriptionSuspension };
