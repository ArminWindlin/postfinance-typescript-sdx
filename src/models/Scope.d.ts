import { CreationEntityState } from "./CreationEntityState";
import { Feature } from "./Feature";
declare class Scope {
    /**
    * The domain name to which this scope is mapped to.
    */
    'domainName'?: string;
    /**
    *
    */
    'features'?: Array<Feature>;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    *
    */
    'machineName'?: string;
    /**
    * The name of the scope is shown to the user where the user should select a scope.
    */
    'name'?: string;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    * The port number to which this scope is mapped to.
    */
    'port'?: number;
    /**
    * Define whether the scope supports SSL.
    */
    'sslActive'?: boolean;
    /**
    *
    */
    'state'?: CreationEntityState;
    /**
    * The themes determines how the application layout, look and feel is. By providing multiple themes you can fallback to other themes.
    */
    'themes'?: Array<string>;
    /**
    *
    */
    'url'?: string;
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
export { Scope };
