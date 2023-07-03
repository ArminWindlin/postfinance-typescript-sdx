import { Address } from "./Address";
import { ChargeAttemptEnvironment } from "./ChargeAttemptEnvironment";
import { CustomersPresence } from "./CustomersPresence";
import { Environment } from "./Environment";
import { FailureReason } from "./FailureReason";
import { LineItem } from "./LineItem";
import { PaymentConnectorConfiguration } from "./PaymentConnectorConfiguration";
import { PaymentTerminal } from "./PaymentTerminal";
import { Token } from "./Token";
import { TokenizationMode } from "./TokenizationMode";
import { TransactionCompletionBehavior } from "./TransactionCompletionBehavior";
import { TransactionEnvironmentSelectionStrategy } from "./TransactionEnvironmentSelectionStrategy";
import { TransactionGroup } from "./TransactionGroup";
import { TransactionState } from "./TransactionState";
import { TransactionUserInterfaceType } from "./TransactionUserInterfaceType";
declare class Transaction {
    /**
    *
    */
    'acceptHeader'?: string;
    /**
    * The accept language contains the header which indicates the language preferences of the buyer.
    */
    'acceptLanguageHeader'?: string;
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
    'authorizationAmount'?: number;
    /**
    * The environment in which this transaction was successfully authorized.
    */
    'authorizationEnvironment'?: ChargeAttemptEnvironment;
    /**
    * The sales channel through which the transaction was placed.
    */
    'authorizationSalesChannel'?: number;
    /**
    * This is the time on which the transaction will be timed out when it is not at least authorized. The timeout time may change over time.
    */
    'authorizationTimeoutOn'?: Date;
    /**
    *
    */
    'authorizedOn'?: Date;
    /**
    * When auto confirmation is enabled the transaction can be confirmed by the user and does not require an explicit confirmation through the web service API.
    */
    'autoConfirmationEnabled'?: boolean;
    /**
    *
    */
    'billingAddress'?: Address;
    /**
    * When the charging of the customer fails we can retry the charging. This implies that we redirect the user back to the payment page which allows the customer to retry. By default we will retry.
    */
    'chargeRetryEnabled'?: boolean;
    /**
    * The completed amount is the total amount which has been captured so far.
    */
    'completedAmount'?: number;
    /**
    *
    */
    'completedOn'?: Date;
    /**
    * The completion behavior controls when the transaction is completed.
    */
    'completionBehavior'?: TransactionCompletionBehavior;
    /**
    *
    */
    'completionTimeoutOn'?: Date;
    /**
    *
    */
    'confirmedBy'?: number;
    /**
    *
    */
    'confirmedOn'?: Date;
    /**
    *
    */
    'createdBy'?: number;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
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
    * The customer's presence indicates what kind of authentication method was finally used during authorization of the transaction. If no value is provided, 'Virtually Present' is used by default.
    */
    'customersPresence'?: CustomersPresence;
    /**
    * This date indicates when the decision has been made if a transaction should be delivered or not.
    */
    'deliveryDecisionMadeOn'?: Date;
    /**
    * The device session identifier links the transaction with the session identifier provided in the URL of the device data JavaScript. This allows to link the transaction with the collected device data of the buyer.
    */
    'deviceSessionIdentifier'?: string;
    /**
    * Flag indicating whether email sending is disabled for this particular transaction. Defaults to false.
    */
    'emailsDisabled'?: boolean;
    /**
    * The transaction's end of life indicates the date from which on no operation can be carried out anymore.
    */
    'endOfLife'?: Date;
    /**
    *
    */
    'environment'?: Environment;
    /**
    * The environment selection strategy determines how the environment (test or production) for processing the transaction is selected.
    */
    'environmentSelectionStrategy'?: TransactionEnvironmentSelectionStrategy;
    /**
    *
    */
    'failedOn'?: Date;
    /**
    * The user will be redirected to failed URL when the transaction could not be authorized or completed. In case no failed URL is specified a default failed page will be displayed.
    */
    'failedUrl'?: string;
    /**
    * The failure reason describes why the transaction failed. This is only provided when the transaction is marked as failed.
    */
    'failureReason'?: FailureReason;
    /**
    *
    */
    'group'?: TransactionGroup;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * The Internet Protocol (IP) address identifies the device of the buyer.
    */
    'internetProtocolAddress'?: string;
    /**
    *
    */
    'internetProtocolAddressCountry'?: string;
    /**
    *
    */
    'invoiceMerchantReference'?: string;
    /**
    *
    */
    'javaEnabled'?: boolean;
    /**
    *
    */
    'language'?: string;
    /**
    *
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The linked space id holds the ID of the space to which the entity belongs to.
    */
    'linkedSpaceId'?: number;
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
    'parent'?: number;
    /**
    *
    */
    'paymentConnectorConfiguration'?: PaymentConnectorConfiguration;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'processingOn'?: Date;
    /**
    * The refunded amount is the total amount which has been refunded so far.
    */
    'refundedAmount'?: number;
    /**
    *
    */
    'screenColorDepth'?: string;
    /**
    *
    */
    'screenHeight'?: string;
    /**
    *
    */
    'screenWidth'?: string;
    /**
    *
    */
    'shippingAddress'?: Address;
    /**
    *
    */
    'shippingMethod'?: string;
    /**
    *
    */
    'spaceViewId'?: number;
    /**
    *
    */
    'state'?: TransactionState;
    /**
    * The user will be redirected to success URL when the transaction could be authorized or completed. In case no success URL is specified a default success page will be displayed.
    */
    'successUrl'?: string;
    /**
    * The terminal on which the payment was processed.
    */
    'terminal'?: PaymentTerminal;
    /**
    * The time zone defines in which time zone the customer is located in. The time zone may affects how dates are formatted when interacting with the customer.
    */
    'timeZone'?: string;
    /**
    *
    */
    'token'?: Token;
    /**
    * The tokenization mode controls if and how the tokenization of payment information is applied to the transaction.
    */
    'tokenizationMode'?: TokenizationMode;
    /**
    * The total applied fees is the sum of all fees that have been applied so far.
    */
    'totalAppliedFees'?: number;
    /**
    * The total settled amount is the total amount which has been settled so far.
    */
    'totalSettledAmount'?: number;
    /**
    * The user agent header provides the exact string which contains the user agent of the buyer.
    */
    'userAgentHeader'?: string;
    /**
    * The failure message describes for an end user why the transaction is failed in the language of the user. This is only provided when the transaction is marked as failed.
    */
    'userFailureMessage'?: string;
    /**
    * The user interface type defines through which user interface the transaction has been processed resp. created.
    */
    'userInterfaceType'?: TransactionUserInterfaceType;
    /**
    * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
    */
    'version'?: number;
    /**
    *
    */
    'windowHeight'?: string;
    /**
    *
    */
    'windowWidth'?: string;
    /**
    * The number of years the transaction will be stored after it has been authorized.
    */
    'yearsToKeep'?: number;
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
export { Transaction };
