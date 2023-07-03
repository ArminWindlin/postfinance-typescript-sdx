import { AbstractTokenUpdate } from "./AbstractTokenUpdate";
import { CreationEntityState } from "./CreationEntityState";
declare class TokenCreate extends AbstractTokenUpdate {
    /**
    * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
    */
    'externalId': string;
    /**
    *
    */
    'state'?: CreationEntityState;
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
export { TokenCreate };
