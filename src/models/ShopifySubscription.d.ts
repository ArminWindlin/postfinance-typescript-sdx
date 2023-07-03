import { ShopifySubscriber } from "./ShopifySubscriber";
import { ShopifySubscriptionState } from "./ShopifySubscriptionState";
declare class ShopifySubscription {
    /**
    *
    */
    'createdBy'?: number;
    /**
    *
    */
    'createdOn'?: Date;
    /**
    * The external id helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
    */
    'externalId'?: string;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'initialExecutionDate'?: Date;
    /**
    *
    */
    'initialPaymentTransaction'?: number;
    /**
    *
    */
    'initialShopifyTransaction'?: number;
    /**
    *
    */
    'language'?: string;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
    /**
    *
    */
    'orderRecurrenceNumber'?: number;
    /**
    *
    */
    'shop'?: number;
    /**
    *
    */
    'state'?: ShopifySubscriptionState;
    /**
    *
    */
    'subscriber'?: ShopifySubscriber;
    /**
    *
    */
    'terminatedBy'?: number;
    /**
    *
    */
    'terminatedOn'?: Date;
    /**
    *
    */
    'terminationRequestDate'?: Date;
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
export { ShopifySubscription };
