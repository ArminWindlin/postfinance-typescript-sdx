import { Charge } from "./Charge";
import { ChargeAttemptEnvironment } from "./ChargeAttemptEnvironment";
import { ChargeAttemptState } from "./ChargeAttemptState";
import { ConnectorInvocation } from "./ConnectorInvocation";
import { CustomersPresence } from "./CustomersPresence";
import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { PaymentConnectorConfiguration } from "./PaymentConnectorConfiguration";
import { PaymentTerminal } from "./PaymentTerminal";
import { TokenVersion } from "./TokenVersion";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
import { TransactionCompletionBehavior } from "./TransactionCompletionBehavior";
import { WalletType } from "./WalletType";
declare class ChargeAttempt extends TransactionAwareEntity {
    /**
    *
    */
    'charge'?: Charge;
    /**
    *
    */
    'completionBehavior'?: TransactionCompletionBehavior;
    /**
    *
    */
    'connectorConfiguration'?: PaymentConnectorConfiguration;
    /**
    * The created on date indicates the date on which the entity was stored into the database.
    */
    'createdOn'?: Date;
    /**
    * The customers presence indicates which kind of customer interaction was used during the charge attempt.
    */
    'customersPresence'?: CustomersPresence;
    /**
    *
    */
    'environment'?: ChargeAttemptEnvironment;
    /**
    *
    */
    'failedOn'?: Date;
    /**
    *
    */
    'failureReason'?: FailureReason;
    /**
    *
    */
    'initializingTokenVersion'?: boolean;
    /**
    *
    */
    'invocation'?: ConnectorInvocation;
    /**
    *
    */
    'labels'?: Array<Label>;
    /**
    *
    */
    'language'?: string;
    /**
    *
    */
    'nextUpdateOn'?: Date;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'redirectionUrl'?: string;
    /**
    *
    */
    'salesChannel'?: number;
    /**
    *
    */
    'spaceViewId'?: number;
    /**
    *
    */
    'state'?: ChargeAttemptState;
    /**
    *
    */
    'succeededOn'?: Date;
    /**
    *
    */
    'terminal'?: PaymentTerminal;
    /**
    *
    */
    'timeZone'?: string;
    /**
    *
    */
    'timeoutOn'?: Date;
    /**
    *
    */
    'tokenVersion'?: TokenVersion;
    /**
    * The user failure message contains the message for the user in case the attempt failed. The message is localized into the language specified on the transaction.
    */
    'userFailureMessage'?: string;
    /**
    * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
    */
    'version'?: number;
    /**
    *
    */
    'walletType'?: WalletType;
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
export { ChargeAttempt };
