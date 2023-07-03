import { ShopifySubscriberState } from "./ShopifySubscriberState";
declare class ShopifySubscriber {
    /**
    *
    */
    'createdOn'?: Date;
    /**
    *
    */
    'emailAddress'?: string;
    /**
    * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
    */
    'externalId'?: string;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
    /**
    *
    */
    'phoneNumber'?: string;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'shop'?: number;
    /**
    *
    */
    'state'?: ShopifySubscriberState;
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
export { ShopifySubscriber };
