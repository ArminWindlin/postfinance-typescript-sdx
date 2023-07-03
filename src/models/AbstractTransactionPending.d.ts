import { AddressCreate } from "./AddressCreate";
import { LineItemCreate } from "./LineItemCreate";
import { TokenizationMode } from "./TokenizationMode";
import { TransactionCompletionBehavior } from "./TransactionCompletionBehavior";
declare class AbstractTransactionPending {
    /**
    *
    */
    'allowedPaymentMethodBrands'?: Array<number>;
    /**
    *
    */
    'allowedPaymentMethodConfigurations'?: Array<number>;
    /**
    *
    */
    'billingAddress'?: AddressCreate;
    /**
    * The completion behavior controls when the transaction is completed.
    */
    'completionBehavior'?: TransactionCompletionBehavior;
    /**
    *
    */
    'currency'?: string;
    /**
    * The customer email address is the email address of the customer. If no email address is provided on the shipping or billing address this address is used.
    */
    'customerEmailAddress'?: string;
    /**
    *
    */
    'customerId'?: string;
    /**
    * The user will be redirected to failed URL when the transaction could not be authorized or completed. In case no failed URL is specified a default failed page will be displayed.
    */
    'failedUrl'?: string;
    /**
    *
    */
    'invoiceMerchantReference'?: string;
    /**
    *
    */
    'language'?: string;
    /**
    *
    */
    'lineItems'?: Array<LineItemCreate>;
    /**
    *
    */
    'merchantReference'?: string;
    /**
    * Meta data allow to store additional data along the object.
    */
    'metaData'?: {
        [key: string]: string;
    };
    /**
    *
    */
    'shippingAddress'?: AddressCreate;
    /**
    *
    */
    'shippingMethod'?: string;
    /**
    * The user will be redirected to success URL when the transaction could be authorized or completed. In case no success URL is specified a default success page will be displayed.
    */
    'successUrl'?: string;
    /**
    * The time zone defines in which time zone the customer is located in. The time zone may affects how dates are formatted when interacting with the customer.
    */
    'timeZone'?: string;
    /**
    *
    */
    'token'?: number;
    /**
    * The tokenization mode controls if and how the tokenization of payment information is applied to the transaction.
    */
    'tokenizationMode'?: TokenizationMode;
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
export { AbstractTransactionPending };
