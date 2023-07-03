import { AbstractPaymentLinkUpdate } from "./AbstractPaymentLinkUpdate";
import { CreationEntityState } from "./CreationEntityState";
import { PaymentLinkProtectionMode } from "./PaymentLinkProtectionMode";
declare class PaymentLinkCreate extends AbstractPaymentLinkUpdate {
    /**
    *
    */
    'state'?: CreationEntityState;
    /**
    * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
    */
    'externalId': string;
    /**
    * The protection mode determines if the payment link is protected against tampering and in what way.
    */
    'protectionMode'?: PaymentLinkProtectionMode;
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
export { PaymentLinkCreate };
