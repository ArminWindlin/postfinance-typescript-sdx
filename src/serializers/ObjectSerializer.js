'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
const AbstractAccountUpdate_1 = require("../models/AbstractAccountUpdate");
const AbstractApplicationUserUpdate_1 = require("../models/AbstractApplicationUserUpdate");
const AbstractCustomerActive_1 = require("../models/AbstractCustomerActive");
const AbstractCustomerAddressActive_1 = require("../models/AbstractCustomerAddressActive");
const AbstractCustomerCommentActive_1 = require("../models/AbstractCustomerCommentActive");
const AbstractHumanUserUpdate_1 = require("../models/AbstractHumanUserUpdate");
const AbstractPaymentLinkUpdate_1 = require("../models/AbstractPaymentLinkUpdate");
const AbstractRefundCommentActive_1 = require("../models/AbstractRefundCommentActive");
const AbstractShopifySubscriptionProductUpdate_1 = require("../models/AbstractShopifySubscriptionProductUpdate");
const AbstractSpaceUpdate_1 = require("../models/AbstractSpaceUpdate");
const AbstractTokenUpdate_1 = require("../models/AbstractTokenUpdate");
const AbstractTransactionCommentActive_1 = require("../models/AbstractTransactionCommentActive");
const AbstractTransactionInvoiceCommentActive_1 = require("../models/AbstractTransactionInvoiceCommentActive");
const AbstractTransactionPending_1 = require("../models/AbstractTransactionPending");
const AbstractWebhookListenerUpdate_1 = require("../models/AbstractWebhookListenerUpdate");
const AbstractWebhookUrlUpdate_1 = require("../models/AbstractWebhookUrlUpdate");
const Account_1 = require("../models/Account");
const AccountState_1 = require("../models/AccountState");
const AccountType_1 = require("../models/AccountType");
const Address_1 = require("../models/Address");
const AddressCreate_1 = require("../models/AddressCreate");
const AnalyticsQuery_1 = require("../models/AnalyticsQuery");
const AnalyticsQueryExecution_1 = require("../models/AnalyticsQueryExecution");
const AnalyticsQueryExecutionState_1 = require("../models/AnalyticsQueryExecutionState");
const AnalyticsQueryResultBatch_1 = require("../models/AnalyticsQueryResultBatch");
const AnalyticsSchemaColumn_1 = require("../models/AnalyticsSchemaColumn");
const AnalyticsSchemaTable_1 = require("../models/AnalyticsSchemaTable");
const BankAccount_1 = require("../models/BankAccount");
const BankAccountEnvironment_1 = require("../models/BankAccountEnvironment");
const BankAccountState_1 = require("../models/BankAccountState");
const BankAccountType_1 = require("../models/BankAccountType");
const BankTransaction_1 = require("../models/BankTransaction");
const BankTransactionFlowDirection_1 = require("../models/BankTransactionFlowDirection");
const BankTransactionSource_1 = require("../models/BankTransactionSource");
const BankTransactionState_1 = require("../models/BankTransactionState");
const BankTransactionType_1 = require("../models/BankTransactionType");
const ChargeAttemptEnvironment_1 = require("../models/ChargeAttemptEnvironment");
const ChargeAttemptState_1 = require("../models/ChargeAttemptState");
const ChargeFlow_1 = require("../models/ChargeFlow");
const ChargeFlowLevelConfiguration_1 = require("../models/ChargeFlowLevelConfiguration");
const ChargeFlowLevelConfigurationType_1 = require("../models/ChargeFlowLevelConfigurationType");
const ChargeFlowLevelState_1 = require("../models/ChargeFlowLevelState");
const ChargeState_1 = require("../models/ChargeState");
const ChargeType_1 = require("../models/ChargeType");
const ClientError_1 = require("../models/ClientError");
const ClientErrorType_1 = require("../models/ClientErrorType");
const CompletionLineItem_1 = require("../models/CompletionLineItem");
const CompletionLineItemCreate_1 = require("../models/CompletionLineItemCreate");
const Condition_1 = require("../models/Condition");
const ConditionType_1 = require("../models/ConditionType");
const ConnectorInvocationStage_1 = require("../models/ConnectorInvocationStage");
const CreationEntityState_1 = require("../models/CreationEntityState");
const CriteriaOperator_1 = require("../models/CriteriaOperator");
const CurrencyBankAccount_1 = require("../models/CurrencyBankAccount");
const Customer_1 = require("../models/Customer");
const CustomerAddress_1 = require("../models/CustomerAddress");
const CustomerAddressType_1 = require("../models/CustomerAddressType");
const CustomerComment_1 = require("../models/CustomerComment");
const CustomerPostalAddress_1 = require("../models/CustomerPostalAddress");
const CustomerPostalAddressCreate_1 = require("../models/CustomerPostalAddressCreate");
const CustomersPresence_1 = require("../models/CustomersPresence");
const DataCollectionType_1 = require("../models/DataCollectionType");
const DatabaseTranslatedString_1 = require("../models/DatabaseTranslatedString");
const DatabaseTranslatedStringItem_1 = require("../models/DatabaseTranslatedStringItem");
const DeliveryIndicationDecisionReason_1 = require("../models/DeliveryIndicationDecisionReason");
const DeliveryIndicationState_1 = require("../models/DeliveryIndicationState");
const DocumentTemplate_1 = require("../models/DocumentTemplate");
const DocumentTemplateType_1 = require("../models/DocumentTemplateType");
const DocumentTemplateTypeGroup_1 = require("../models/DocumentTemplateTypeGroup");
const EntityExportRequest_1 = require("../models/EntityExportRequest");
const EntityQuery_1 = require("../models/EntityQuery");
const EntityQueryFilter_1 = require("../models/EntityQueryFilter");
const EntityQueryFilterType_1 = require("../models/EntityQueryFilterType");
const EntityQueryOrderBy_1 = require("../models/EntityQueryOrderBy");
const EntityQueryOrderByType_1 = require("../models/EntityQueryOrderByType");
const Environment_1 = require("../models/Environment");
const ExternalTransferBankTransaction_1 = require("../models/ExternalTransferBankTransaction");
const FailureCategory_1 = require("../models/FailureCategory");
const FailureReason_1 = require("../models/FailureReason");
const Feature_1 = require("../models/Feature");
const FeatureCategory_1 = require("../models/FeatureCategory");
const Gender_1 = require("../models/Gender");
const HumanUser_1 = require("../models/HumanUser");
const InternalTransferBankTransaction_1 = require("../models/InternalTransferBankTransaction");
const InvoiceReconciliationRecordInvoiceLink_1 = require("../models/InvoiceReconciliationRecordInvoiceLink");
const InvoiceReconciliationRecordRejectionStatus_1 = require("../models/InvoiceReconciliationRecordRejectionStatus");
const InvoiceReconciliationRecordState_1 = require("../models/InvoiceReconciliationRecordState");
const InvoiceReconciliationRecordType_1 = require("../models/InvoiceReconciliationRecordType");
const InvoiceReimbursement_1 = require("../models/InvoiceReimbursement");
const InvoiceReimbursementState_1 = require("../models/InvoiceReimbursementState");
const Label_1 = require("../models/Label");
const LabelDescriptor_1 = require("../models/LabelDescriptor");
const LabelDescriptorCategory_1 = require("../models/LabelDescriptorCategory");
const LabelDescriptorGroup_1 = require("../models/LabelDescriptorGroup");
const LabelDescriptorType_1 = require("../models/LabelDescriptorType");
const LegalOrganizationForm_1 = require("../models/LegalOrganizationForm");
const LineItem_1 = require("../models/LineItem");
const LineItemAttribute_1 = require("../models/LineItemAttribute");
const LineItemAttributeCreate_1 = require("../models/LineItemAttributeCreate");
const LineItemCreate_1 = require("../models/LineItemCreate");
const LineItemReduction_1 = require("../models/LineItemReduction");
const LineItemReductionCreate_1 = require("../models/LineItemReductionCreate");
const LineItemType_1 = require("../models/LineItemType");
const LocalizedString_1 = require("../models/LocalizedString");
const ManualTask_1 = require("../models/ManualTask");
const ManualTaskAction_1 = require("../models/ManualTaskAction");
const ManualTaskActionStyle_1 = require("../models/ManualTaskActionStyle");
const ManualTaskState_1 = require("../models/ManualTaskState");
const ManualTaskType_1 = require("../models/ManualTaskType");
const OneClickPaymentMode_1 = require("../models/OneClickPaymentMode");
const PaymentAdjustment_1 = require("../models/PaymentAdjustment");
const PaymentAdjustmentType_1 = require("../models/PaymentAdjustmentType");
const PaymentConnector_1 = require("../models/PaymentConnector");
const PaymentConnectorConfiguration_1 = require("../models/PaymentConnectorConfiguration");
const PaymentConnectorFeature_1 = require("../models/PaymentConnectorFeature");
const PaymentContract_1 = require("../models/PaymentContract");
const PaymentContractState_1 = require("../models/PaymentContractState");
const PaymentContractType_1 = require("../models/PaymentContractType");
const PaymentInformationHash_1 = require("../models/PaymentInformationHash");
const PaymentInformationHashType_1 = require("../models/PaymentInformationHashType");
const PaymentInitiationAdviceFile_1 = require("../models/PaymentInitiationAdviceFile");
const PaymentInitiationAdviceFileState_1 = require("../models/PaymentInitiationAdviceFileState");
const PaymentLink_1 = require("../models/PaymentLink");
const PaymentLinkAddressHandlingMode_1 = require("../models/PaymentLinkAddressHandlingMode");
const PaymentLinkProtectionMode_1 = require("../models/PaymentLinkProtectionMode");
const PaymentLinkUpdate_1 = require("../models/PaymentLinkUpdate");
const PaymentMethod_1 = require("../models/PaymentMethod");
const PaymentMethodBrand_1 = require("../models/PaymentMethodBrand");
const PaymentMethodConfiguration_1 = require("../models/PaymentMethodConfiguration");
const PaymentPrimaryRiskTaker_1 = require("../models/PaymentPrimaryRiskTaker");
const PaymentProcessor_1 = require("../models/PaymentProcessor");
const PaymentProcessorConfiguration_1 = require("../models/PaymentProcessorConfiguration");
const PaymentTerminal_1 = require("../models/PaymentTerminal");
const PaymentTerminalAddress_1 = require("../models/PaymentTerminalAddress");
const PaymentTerminalConfiguration_1 = require("../models/PaymentTerminalConfiguration");
const PaymentTerminalConfigurationState_1 = require("../models/PaymentTerminalConfigurationState");
const PaymentTerminalConfigurationVersion_1 = require("../models/PaymentTerminalConfigurationVersion");
const PaymentTerminalConfigurationVersionState_1 = require("../models/PaymentTerminalConfigurationVersionState");
const PaymentTerminalDccTransactionSum_1 = require("../models/PaymentTerminalDccTransactionSum");
const PaymentTerminalLocation_1 = require("../models/PaymentTerminalLocation");
const PaymentTerminalLocationState_1 = require("../models/PaymentTerminalLocationState");
const PaymentTerminalLocationVersion_1 = require("../models/PaymentTerminalLocationVersion");
const PaymentTerminalLocationVersionState_1 = require("../models/PaymentTerminalLocationVersionState");
const PaymentTerminalReceiptType_1 = require("../models/PaymentTerminalReceiptType");
const PaymentTerminalState_1 = require("../models/PaymentTerminalState");
const PaymentTerminalTransactionSum_1 = require("../models/PaymentTerminalTransactionSum");
const PaymentTerminalTransactionSummary_1 = require("../models/PaymentTerminalTransactionSummary");
const PaymentTerminalTransactionSummaryFetchRequest_1 = require("../models/PaymentTerminalTransactionSummaryFetchRequest");
const PaymentTerminalType_1 = require("../models/PaymentTerminalType");
const Permission_1 = require("../models/Permission");
const Refund_1 = require("../models/Refund");
const RefundComment_1 = require("../models/RefundComment");
const RefundCreate_1 = require("../models/RefundCreate");
const RefundState_1 = require("../models/RefundState");
const RefundType_1 = require("../models/RefundType");
const RenderedDocument_1 = require("../models/RenderedDocument");
const RenderedTerminalReceipt_1 = require("../models/RenderedTerminalReceipt");
const RenderedTerminalTransactionSummary_1 = require("../models/RenderedTerminalTransactionSummary");
const ResourcePath_1 = require("../models/ResourcePath");
const ResourceState_1 = require("../models/ResourceState");
const RestAddressFormat_1 = require("../models/RestAddressFormat");
const RestAddressFormatField_1 = require("../models/RestAddressFormatField");
const RestCountry_1 = require("../models/RestCountry");
const RestCountryState_1 = require("../models/RestCountryState");
const RestCurrency_1 = require("../models/RestCurrency");
const RestLanguage_1 = require("../models/RestLanguage");
const Role_1 = require("../models/Role");
const RoleState_1 = require("../models/RoleState");
const SalesChannel_1 = require("../models/SalesChannel");
const Scope_1 = require("../models/Scope");
const ServerError_1 = require("../models/ServerError");
const ShopifyAdditionalLineItemData_1 = require("../models/ShopifyAdditionalLineItemData");
const ShopifyIntegration_1 = require("../models/ShopifyIntegration");
const ShopifyIntegrationPaymentAppVersion_1 = require("../models/ShopifyIntegrationPaymentAppVersion");
const ShopifyIntegrationSubscriptionAppVersion_1 = require("../models/ShopifyIntegrationSubscriptionAppVersion");
const ShopifyRecurringOrderState_1 = require("../models/ShopifyRecurringOrderState");
const ShopifyRecurringOrderUpdateRequest_1 = require("../models/ShopifyRecurringOrderUpdateRequest");
const ShopifySubscriber_1 = require("../models/ShopifySubscriber");
const ShopifySubscriberActive_1 = require("../models/ShopifySubscriberActive");
const ShopifySubscriberCreation_1 = require("../models/ShopifySubscriberCreation");
const ShopifySubscriberState_1 = require("../models/ShopifySubscriberState");
const ShopifySubscription_1 = require("../models/ShopifySubscription");
const ShopifySubscriptionAddressCreate_1 = require("../models/ShopifySubscriptionAddressCreate");
const ShopifySubscriptionBillingIntervalUnit_1 = require("../models/ShopifySubscriptionBillingIntervalUnit");
const ShopifySubscriptionCreationRequest_1 = require("../models/ShopifySubscriptionCreationRequest");
const ShopifySubscriptionModelBillingConfiguration_1 = require("../models/ShopifySubscriptionModelBillingConfiguration");
const ShopifySubscriptionModelItem_1 = require("../models/ShopifySubscriptionModelItem");
const ShopifySubscriptionModelTaxLine_1 = require("../models/ShopifySubscriptionModelTaxLine");
const ShopifySubscriptionProduct_1 = require("../models/ShopifySubscriptionProduct");
const ShopifySubscriptionProductPricingOption_1 = require("../models/ShopifySubscriptionProductPricingOption");
const ShopifySubscriptionProductState_1 = require("../models/ShopifySubscriptionProductState");
const ShopifySubscriptionState_1 = require("../models/ShopifySubscriptionState");
const ShopifySubscriptionSuspension_1 = require("../models/ShopifySubscriptionSuspension");
const ShopifySubscriptionSuspensionCreate_1 = require("../models/ShopifySubscriptionSuspensionCreate");
const ShopifySubscriptionSuspensionInitiator_1 = require("../models/ShopifySubscriptionSuspensionInitiator");
const ShopifySubscriptionSuspensionState_1 = require("../models/ShopifySubscriptionSuspensionState");
const ShopifySubscriptionSuspensionType_1 = require("../models/ShopifySubscriptionSuspensionType");
const ShopifySubscriptionUpdateAddressesRequest_1 = require("../models/ShopifySubscriptionUpdateAddressesRequest");
const ShopifySubscriptionUpdateRequest_1 = require("../models/ShopifySubscriptionUpdateRequest");
const ShopifySubscriptionVersion_1 = require("../models/ShopifySubscriptionVersion");
const ShopifySubscriptionVersionItem_1 = require("../models/ShopifySubscriptionVersionItem");
const ShopifySubscriptionVersionItemPriceStrategy_1 = require("../models/ShopifySubscriptionVersionItemPriceStrategy");
const ShopifySubscriptionVersionState_1 = require("../models/ShopifySubscriptionVersionState");
const ShopifySubscriptionWeekday_1 = require("../models/ShopifySubscriptionWeekday");
const ShopifyTaxLine_1 = require("../models/ShopifyTaxLine");
const ShopifyTransactionState_1 = require("../models/ShopifyTransactionState");
const Space_1 = require("../models/Space");
const SpaceAddress_1 = require("../models/SpaceAddress");
const SpaceAddressCreate_1 = require("../models/SpaceAddressCreate");
const SpaceView_1 = require("../models/SpaceView");
const StaticValue_1 = require("../models/StaticValue");
const Tax_1 = require("../models/Tax");
const TaxCreate_1 = require("../models/TaxCreate");
const TenantDatabase_1 = require("../models/TenantDatabase");
const TerminalReceiptFetchRequest_1 = require("../models/TerminalReceiptFetchRequest");
const TerminalReceiptFormat_1 = require("../models/TerminalReceiptFormat");
const Token_1 = require("../models/Token");
const TokenVersion_1 = require("../models/TokenVersion");
const TokenVersionState_1 = require("../models/TokenVersionState");
const TokenVersionType_1 = require("../models/TokenVersionType");
const TokenizationMode_1 = require("../models/TokenizationMode");
const Transaction_1 = require("../models/Transaction");
const TransactionAwareEntity_1 = require("../models/TransactionAwareEntity");
const TransactionComment_1 = require("../models/TransactionComment");
const TransactionCompletionBehavior_1 = require("../models/TransactionCompletionBehavior");
const TransactionCompletionMode_1 = require("../models/TransactionCompletionMode");
const TransactionCompletionRequest_1 = require("../models/TransactionCompletionRequest");
const TransactionCompletionState_1 = require("../models/TransactionCompletionState");
const TransactionEnvironmentSelectionStrategy_1 = require("../models/TransactionEnvironmentSelectionStrategy");
const TransactionGroup_1 = require("../models/TransactionGroup");
const TransactionGroupState_1 = require("../models/TransactionGroupState");
const TransactionInvoiceComment_1 = require("../models/TransactionInvoiceComment");
const TransactionInvoiceReplacement_1 = require("../models/TransactionInvoiceReplacement");
const TransactionInvoiceState_1 = require("../models/TransactionInvoiceState");
const TransactionLineItemVersionCreate_1 = require("../models/TransactionLineItemVersionCreate");
const TransactionLineItemVersionState_1 = require("../models/TransactionLineItemVersionState");
const TransactionState_1 = require("../models/TransactionState");
const TransactionUserInterfaceType_1 = require("../models/TransactionUserInterfaceType");
const TransactionVoidMode_1 = require("../models/TransactionVoidMode");
const TransactionVoidState_1 = require("../models/TransactionVoidState");
const TwoFactorAuthenticationType_1 = require("../models/TwoFactorAuthenticationType");
const User_1 = require("../models/User");
const UserAccountRole_1 = require("../models/UserAccountRole");
const UserSpaceRole_1 = require("../models/UserSpaceRole");
const UserType_1 = require("../models/UserType");
const WalletType_1 = require("../models/WalletType");
const WebhookIdentity_1 = require("../models/WebhookIdentity");
const WebhookListener_1 = require("../models/WebhookListener");
const WebhookListenerEntity_1 = require("../models/WebhookListenerEntity");
const WebhookUrl_1 = require("../models/WebhookUrl");
const AccountCreate_1 = require("../models/AccountCreate");
const AccountUpdate_1 = require("../models/AccountUpdate");
const ApplicationUser_1 = require("../models/ApplicationUser");
const ApplicationUserCreate_1 = require("../models/ApplicationUserCreate");
const ApplicationUserUpdate_1 = require("../models/ApplicationUserUpdate");
const Charge_1 = require("../models/Charge");
const ChargeAttempt_1 = require("../models/ChargeAttempt");
const ChargeBankTransaction_1 = require("../models/ChargeBankTransaction");
const ChargeFlowLevel_1 = require("../models/ChargeFlowLevel");
const ChargeFlowLevelPaymentLink_1 = require("../models/ChargeFlowLevelPaymentLink");
const ConnectorInvocation_1 = require("../models/ConnectorInvocation");
const CustomerActive_1 = require("../models/CustomerActive");
const CustomerAddressActive_1 = require("../models/CustomerAddressActive");
const CustomerAddressCreate_1 = require("../models/CustomerAddressCreate");
const CustomerCommentActive_1 = require("../models/CustomerCommentActive");
const CustomerCommentCreate_1 = require("../models/CustomerCommentCreate");
const CustomerCreate_1 = require("../models/CustomerCreate");
const DeliveryIndication_1 = require("../models/DeliveryIndication");
const HumanUserCreate_1 = require("../models/HumanUserCreate");
const HumanUserUpdate_1 = require("../models/HumanUserUpdate");
const InvoiceReconciliationRecord_1 = require("../models/InvoiceReconciliationRecord");
const InvoiceReimbursementWithRefundReference_1 = require("../models/InvoiceReimbursementWithRefundReference");
const PaymentLinkActive_1 = require("../models/PaymentLinkActive");
const PaymentLinkCreate_1 = require("../models/PaymentLinkCreate");
const RefundBankTransaction_1 = require("../models/RefundBankTransaction");
const RefundCommentActive_1 = require("../models/RefundCommentActive");
const RefundCommentCreate_1 = require("../models/RefundCommentCreate");
const RefundRecoveryBankTransaction_1 = require("../models/RefundRecoveryBankTransaction");
const ShopifyRecurringOrder_1 = require("../models/ShopifyRecurringOrder");
const ShopifySubscriptionAddress_1 = require("../models/ShopifySubscriptionAddress");
const ShopifySubscriptionProductCreate_1 = require("../models/ShopifySubscriptionProductCreate");
const ShopifySubscriptionProductUpdate_1 = require("../models/ShopifySubscriptionProductUpdate");
const ShopifyTransaction_1 = require("../models/ShopifyTransaction");
const SpaceCreate_1 = require("../models/SpaceCreate");
const SpaceUpdate_1 = require("../models/SpaceUpdate");
const TokenCreate_1 = require("../models/TokenCreate");
const TokenUpdate_1 = require("../models/TokenUpdate");
const TransactionCommentActive_1 = require("../models/TransactionCommentActive");
const TransactionCommentCreate_1 = require("../models/TransactionCommentCreate");
const TransactionCompletion_1 = require("../models/TransactionCompletion");
const TransactionCreate_1 = require("../models/TransactionCreate");
const TransactionInvoice_1 = require("../models/TransactionInvoice");
const TransactionInvoiceCommentActive_1 = require("../models/TransactionInvoiceCommentActive");
const TransactionInvoiceCommentCreate_1 = require("../models/TransactionInvoiceCommentCreate");
const TransactionLineItemVersion_1 = require("../models/TransactionLineItemVersion");
const TransactionPending_1 = require("../models/TransactionPending");
const TransactionVoid_1 = require("../models/TransactionVoid");
const WebhookListenerCreate_1 = require("../models/WebhookListenerCreate");
const WebhookListenerUpdate_1 = require("../models/WebhookListenerUpdate");
const WebhookUrlCreate_1 = require("../models/WebhookUrlCreate");
const WebhookUrlUpdate_1 = require("../models/WebhookUrlUpdate");
const ApplicationUserCreateWithMacKey_1 = require("../models/ApplicationUserCreateWithMacKey");
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (ObjectSerializer.primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (ObjectSerializer.enumsMap[expectedType]) {
                return expectedType;
            }
            if (!ObjectSerializer.typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = ObjectSerializer.typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    return data[discriminatorProperty]; // use the type given in the discriminator
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (ObjectSerializer.primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toString();
        }
        else {
            if (ObjectSerializer.enumsMap[type]) {
                return data;
            }
            if (!ObjectSerializer.typeMap[type]) { // in case we dont know the type
                return data;
            }
            // get the map for the correct type.
            let attributeTypes = ObjectSerializer.typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (ObjectSerializer.primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (ObjectSerializer.enumsMap[type]) { // is Enum
                return data;
            }
            if (!ObjectSerializer.typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new ObjectSerializer.typeMap[type]();
            let attributeTypes = ObjectSerializer.typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
/* tslint:disable:no-unused-variable */
ObjectSerializer.primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
ObjectSerializer.enumsMap = {
    "AccountState": AccountState_1.AccountState,
    "AccountType": AccountType_1.AccountType,
    "AnalyticsQueryExecutionState": AnalyticsQueryExecutionState_1.AnalyticsQueryExecutionState,
    "BankAccountEnvironment": BankAccountEnvironment_1.BankAccountEnvironment,
    "BankAccountState": BankAccountState_1.BankAccountState,
    "BankTransactionFlowDirection": BankTransactionFlowDirection_1.BankTransactionFlowDirection,
    "BankTransactionState": BankTransactionState_1.BankTransactionState,
    "ChargeAttemptEnvironment": ChargeAttemptEnvironment_1.ChargeAttemptEnvironment,
    "ChargeAttemptState": ChargeAttemptState_1.ChargeAttemptState,
    "ChargeFlowLevelState": ChargeFlowLevelState_1.ChargeFlowLevelState,
    "ChargeState": ChargeState_1.ChargeState,
    "ChargeType": ChargeType_1.ChargeType,
    "ClientErrorType": ClientErrorType_1.ClientErrorType,
    "ConnectorInvocationStage": ConnectorInvocationStage_1.ConnectorInvocationStage,
    "CreationEntityState": CreationEntityState_1.CreationEntityState,
    "CriteriaOperator": CriteriaOperator_1.CriteriaOperator,
    "CustomerAddressType": CustomerAddressType_1.CustomerAddressType,
    "CustomersPresence": CustomersPresence_1.CustomersPresence,
    "DataCollectionType": DataCollectionType_1.DataCollectionType,
    "DeliveryIndicationState": DeliveryIndicationState_1.DeliveryIndicationState,
    "EntityQueryFilterType": EntityQueryFilterType_1.EntityQueryFilterType,
    "EntityQueryOrderByType": EntityQueryOrderByType_1.EntityQueryOrderByType,
    "Environment": Environment_1.Environment,
    "FailureCategory": FailureCategory_1.FailureCategory,
    "Gender": Gender_1.Gender,
    "InvoiceReconciliationRecordRejectionStatus": InvoiceReconciliationRecordRejectionStatus_1.InvoiceReconciliationRecordRejectionStatus,
    "InvoiceReconciliationRecordState": InvoiceReconciliationRecordState_1.InvoiceReconciliationRecordState,
    "InvoiceReimbursementState": InvoiceReimbursementState_1.InvoiceReimbursementState,
    "LabelDescriptorCategory": LabelDescriptorCategory_1.LabelDescriptorCategory,
    "LineItemType": LineItemType_1.LineItemType,
    "ManualTaskActionStyle": ManualTaskActionStyle_1.ManualTaskActionStyle,
    "ManualTaskState": ManualTaskState_1.ManualTaskState,
    "OneClickPaymentMode": OneClickPaymentMode_1.OneClickPaymentMode,
    "PaymentContractState": PaymentContractState_1.PaymentContractState,
    "PaymentInitiationAdviceFileState": PaymentInitiationAdviceFileState_1.PaymentInitiationAdviceFileState,
    "PaymentLinkAddressHandlingMode": PaymentLinkAddressHandlingMode_1.PaymentLinkAddressHandlingMode,
    "PaymentLinkProtectionMode": PaymentLinkProtectionMode_1.PaymentLinkProtectionMode,
    "PaymentPrimaryRiskTaker": PaymentPrimaryRiskTaker_1.PaymentPrimaryRiskTaker,
    "PaymentTerminalConfigurationState": PaymentTerminalConfigurationState_1.PaymentTerminalConfigurationState,
    "PaymentTerminalConfigurationVersionState": PaymentTerminalConfigurationVersionState_1.PaymentTerminalConfigurationVersionState,
    "PaymentTerminalLocationState": PaymentTerminalLocationState_1.PaymentTerminalLocationState,
    "PaymentTerminalLocationVersionState": PaymentTerminalLocationVersionState_1.PaymentTerminalLocationVersionState,
    "PaymentTerminalState": PaymentTerminalState_1.PaymentTerminalState,
    "RefundState": RefundState_1.RefundState,
    "RefundType": RefundType_1.RefundType,
    "ResourceState": ResourceState_1.ResourceState,
    "RestAddressFormatField": RestAddressFormatField_1.RestAddressFormatField,
    "RoleState": RoleState_1.RoleState,
    "ShopifyAdditionalLineItemData": ShopifyAdditionalLineItemData_1.ShopifyAdditionalLineItemData,
    "ShopifyIntegrationPaymentAppVersion": ShopifyIntegrationPaymentAppVersion_1.ShopifyIntegrationPaymentAppVersion,
    "ShopifyIntegrationSubscriptionAppVersion": ShopifyIntegrationSubscriptionAppVersion_1.ShopifyIntegrationSubscriptionAppVersion,
    "ShopifyRecurringOrderState": ShopifyRecurringOrderState_1.ShopifyRecurringOrderState,
    "ShopifySubscriberState": ShopifySubscriberState_1.ShopifySubscriberState,
    "ShopifySubscriptionBillingIntervalUnit": ShopifySubscriptionBillingIntervalUnit_1.ShopifySubscriptionBillingIntervalUnit,
    "ShopifySubscriptionProductPricingOption": ShopifySubscriptionProductPricingOption_1.ShopifySubscriptionProductPricingOption,
    "ShopifySubscriptionProductState": ShopifySubscriptionProductState_1.ShopifySubscriptionProductState,
    "ShopifySubscriptionState": ShopifySubscriptionState_1.ShopifySubscriptionState,
    "ShopifySubscriptionSuspensionInitiator": ShopifySubscriptionSuspensionInitiator_1.ShopifySubscriptionSuspensionInitiator,
    "ShopifySubscriptionSuspensionState": ShopifySubscriptionSuspensionState_1.ShopifySubscriptionSuspensionState,
    "ShopifySubscriptionSuspensionType": ShopifySubscriptionSuspensionType_1.ShopifySubscriptionSuspensionType,
    "ShopifySubscriptionVersionItemPriceStrategy": ShopifySubscriptionVersionItemPriceStrategy_1.ShopifySubscriptionVersionItemPriceStrategy,
    "ShopifySubscriptionVersionState": ShopifySubscriptionVersionState_1.ShopifySubscriptionVersionState,
    "ShopifySubscriptionWeekday": ShopifySubscriptionWeekday_1.ShopifySubscriptionWeekday,
    "ShopifyTransactionState": ShopifyTransactionState_1.ShopifyTransactionState,
    "TerminalReceiptFormat": TerminalReceiptFormat_1.TerminalReceiptFormat,
    "TokenVersionState": TokenVersionState_1.TokenVersionState,
    "TokenizationMode": TokenizationMode_1.TokenizationMode,
    "TransactionCompletionBehavior": TransactionCompletionBehavior_1.TransactionCompletionBehavior,
    "TransactionCompletionMode": TransactionCompletionMode_1.TransactionCompletionMode,
    "TransactionCompletionState": TransactionCompletionState_1.TransactionCompletionState,
    "TransactionEnvironmentSelectionStrategy": TransactionEnvironmentSelectionStrategy_1.TransactionEnvironmentSelectionStrategy,
    "TransactionGroupState": TransactionGroupState_1.TransactionGroupState,
    "TransactionInvoiceState": TransactionInvoiceState_1.TransactionInvoiceState,
    "TransactionLineItemVersionState": TransactionLineItemVersionState_1.TransactionLineItemVersionState,
    "TransactionState": TransactionState_1.TransactionState,
    "TransactionUserInterfaceType": TransactionUserInterfaceType_1.TransactionUserInterfaceType,
    "TransactionVoidMode": TransactionVoidMode_1.TransactionVoidMode,
    "TransactionVoidState": TransactionVoidState_1.TransactionVoidState,
    "UserType": UserType_1.UserType,
    "WalletType": WalletType_1.WalletType,
};
ObjectSerializer.typeMap = {
    "AbstractAccountUpdate": AbstractAccountUpdate_1.AbstractAccountUpdate,
    "AbstractApplicationUserUpdate": AbstractApplicationUserUpdate_1.AbstractApplicationUserUpdate,
    "AbstractCustomerActive": AbstractCustomerActive_1.AbstractCustomerActive,
    "AbstractCustomerAddressActive": AbstractCustomerAddressActive_1.AbstractCustomerAddressActive,
    "AbstractCustomerCommentActive": AbstractCustomerCommentActive_1.AbstractCustomerCommentActive,
    "AbstractHumanUserUpdate": AbstractHumanUserUpdate_1.AbstractHumanUserUpdate,
    "AbstractPaymentLinkUpdate": AbstractPaymentLinkUpdate_1.AbstractPaymentLinkUpdate,
    "AbstractRefundCommentActive": AbstractRefundCommentActive_1.AbstractRefundCommentActive,
    "AbstractShopifySubscriptionProductUpdate": AbstractShopifySubscriptionProductUpdate_1.AbstractShopifySubscriptionProductUpdate,
    "AbstractSpaceUpdate": AbstractSpaceUpdate_1.AbstractSpaceUpdate,
    "AbstractTokenUpdate": AbstractTokenUpdate_1.AbstractTokenUpdate,
    "AbstractTransactionCommentActive": AbstractTransactionCommentActive_1.AbstractTransactionCommentActive,
    "AbstractTransactionInvoiceCommentActive": AbstractTransactionInvoiceCommentActive_1.AbstractTransactionInvoiceCommentActive,
    "AbstractTransactionPending": AbstractTransactionPending_1.AbstractTransactionPending,
    "AbstractWebhookListenerUpdate": AbstractWebhookListenerUpdate_1.AbstractWebhookListenerUpdate,
    "AbstractWebhookUrlUpdate": AbstractWebhookUrlUpdate_1.AbstractWebhookUrlUpdate,
    "Account": Account_1.Account,
    "Address": Address_1.Address,
    "AddressCreate": AddressCreate_1.AddressCreate,
    "AnalyticsQuery": AnalyticsQuery_1.AnalyticsQuery,
    "AnalyticsQueryExecution": AnalyticsQueryExecution_1.AnalyticsQueryExecution,
    "AnalyticsQueryResultBatch": AnalyticsQueryResultBatch_1.AnalyticsQueryResultBatch,
    "AnalyticsSchemaColumn": AnalyticsSchemaColumn_1.AnalyticsSchemaColumn,
    "AnalyticsSchemaTable": AnalyticsSchemaTable_1.AnalyticsSchemaTable,
    "BankAccount": BankAccount_1.BankAccount,
    "BankAccountType": BankAccountType_1.BankAccountType,
    "BankTransaction": BankTransaction_1.BankTransaction,
    "BankTransactionSource": BankTransactionSource_1.BankTransactionSource,
    "BankTransactionType": BankTransactionType_1.BankTransactionType,
    "ChargeFlow": ChargeFlow_1.ChargeFlow,
    "ChargeFlowLevelConfiguration": ChargeFlowLevelConfiguration_1.ChargeFlowLevelConfiguration,
    "ChargeFlowLevelConfigurationType": ChargeFlowLevelConfigurationType_1.ChargeFlowLevelConfigurationType,
    "ClientError": ClientError_1.ClientError,
    "CompletionLineItem": CompletionLineItem_1.CompletionLineItem,
    "CompletionLineItemCreate": CompletionLineItemCreate_1.CompletionLineItemCreate,
    "Condition": Condition_1.Condition,
    "ConditionType": ConditionType_1.ConditionType,
    "CurrencyBankAccount": CurrencyBankAccount_1.CurrencyBankAccount,
    "Customer": Customer_1.Customer,
    "CustomerAddress": CustomerAddress_1.CustomerAddress,
    "CustomerComment": CustomerComment_1.CustomerComment,
    "CustomerPostalAddress": CustomerPostalAddress_1.CustomerPostalAddress,
    "CustomerPostalAddressCreate": CustomerPostalAddressCreate_1.CustomerPostalAddressCreate,
    "DatabaseTranslatedString": DatabaseTranslatedString_1.DatabaseTranslatedString,
    "DatabaseTranslatedStringItem": DatabaseTranslatedStringItem_1.DatabaseTranslatedStringItem,
    "DeliveryIndicationDecisionReason": DeliveryIndicationDecisionReason_1.DeliveryIndicationDecisionReason,
    "DocumentTemplate": DocumentTemplate_1.DocumentTemplate,
    "DocumentTemplateType": DocumentTemplateType_1.DocumentTemplateType,
    "DocumentTemplateTypeGroup": DocumentTemplateTypeGroup_1.DocumentTemplateTypeGroup,
    "EntityExportRequest": EntityExportRequest_1.EntityExportRequest,
    "EntityQuery": EntityQuery_1.EntityQuery,
    "EntityQueryFilter": EntityQueryFilter_1.EntityQueryFilter,
    "EntityQueryOrderBy": EntityQueryOrderBy_1.EntityQueryOrderBy,
    "ExternalTransferBankTransaction": ExternalTransferBankTransaction_1.ExternalTransferBankTransaction,
    "FailureReason": FailureReason_1.FailureReason,
    "Feature": Feature_1.Feature,
    "FeatureCategory": FeatureCategory_1.FeatureCategory,
    "HumanUser": HumanUser_1.HumanUser,
    "InternalTransferBankTransaction": InternalTransferBankTransaction_1.InternalTransferBankTransaction,
    "InvoiceReconciliationRecordInvoiceLink": InvoiceReconciliationRecordInvoiceLink_1.InvoiceReconciliationRecordInvoiceLink,
    "InvoiceReconciliationRecordType": InvoiceReconciliationRecordType_1.InvoiceReconciliationRecordType,
    "InvoiceReimbursement": InvoiceReimbursement_1.InvoiceReimbursement,
    "Label": Label_1.Label,
    "LabelDescriptor": LabelDescriptor_1.LabelDescriptor,
    "LabelDescriptorGroup": LabelDescriptorGroup_1.LabelDescriptorGroup,
    "LabelDescriptorType": LabelDescriptorType_1.LabelDescriptorType,
    "LegalOrganizationForm": LegalOrganizationForm_1.LegalOrganizationForm,
    "LineItem": LineItem_1.LineItem,
    "LineItemAttribute": LineItemAttribute_1.LineItemAttribute,
    "LineItemAttributeCreate": LineItemAttributeCreate_1.LineItemAttributeCreate,
    "LineItemCreate": LineItemCreate_1.LineItemCreate,
    "LineItemReduction": LineItemReduction_1.LineItemReduction,
    "LineItemReductionCreate": LineItemReductionCreate_1.LineItemReductionCreate,
    "LocalizedString": LocalizedString_1.LocalizedString,
    "ManualTask": ManualTask_1.ManualTask,
    "ManualTaskAction": ManualTaskAction_1.ManualTaskAction,
    "ManualTaskType": ManualTaskType_1.ManualTaskType,
    "PaymentAdjustment": PaymentAdjustment_1.PaymentAdjustment,
    "PaymentAdjustmentType": PaymentAdjustmentType_1.PaymentAdjustmentType,
    "PaymentConnector": PaymentConnector_1.PaymentConnector,
    "PaymentConnectorConfiguration": PaymentConnectorConfiguration_1.PaymentConnectorConfiguration,
    "PaymentConnectorFeature": PaymentConnectorFeature_1.PaymentConnectorFeature,
    "PaymentContract": PaymentContract_1.PaymentContract,
    "PaymentContractType": PaymentContractType_1.PaymentContractType,
    "PaymentInformationHash": PaymentInformationHash_1.PaymentInformationHash,
    "PaymentInformationHashType": PaymentInformationHashType_1.PaymentInformationHashType,
    "PaymentInitiationAdviceFile": PaymentInitiationAdviceFile_1.PaymentInitiationAdviceFile,
    "PaymentLink": PaymentLink_1.PaymentLink,
    "PaymentLinkUpdate": PaymentLinkUpdate_1.PaymentLinkUpdate,
    "PaymentMethod": PaymentMethod_1.PaymentMethod,
    "PaymentMethodBrand": PaymentMethodBrand_1.PaymentMethodBrand,
    "PaymentMethodConfiguration": PaymentMethodConfiguration_1.PaymentMethodConfiguration,
    "PaymentProcessor": PaymentProcessor_1.PaymentProcessor,
    "PaymentProcessorConfiguration": PaymentProcessorConfiguration_1.PaymentProcessorConfiguration,
    "PaymentTerminal": PaymentTerminal_1.PaymentTerminal,
    "PaymentTerminalAddress": PaymentTerminalAddress_1.PaymentTerminalAddress,
    "PaymentTerminalConfiguration": PaymentTerminalConfiguration_1.PaymentTerminalConfiguration,
    "PaymentTerminalConfigurationVersion": PaymentTerminalConfigurationVersion_1.PaymentTerminalConfigurationVersion,
    "PaymentTerminalDccTransactionSum": PaymentTerminalDccTransactionSum_1.PaymentTerminalDccTransactionSum,
    "PaymentTerminalLocation": PaymentTerminalLocation_1.PaymentTerminalLocation,
    "PaymentTerminalLocationVersion": PaymentTerminalLocationVersion_1.PaymentTerminalLocationVersion,
    "PaymentTerminalReceiptType": PaymentTerminalReceiptType_1.PaymentTerminalReceiptType,
    "PaymentTerminalTransactionSum": PaymentTerminalTransactionSum_1.PaymentTerminalTransactionSum,
    "PaymentTerminalTransactionSummary": PaymentTerminalTransactionSummary_1.PaymentTerminalTransactionSummary,
    "PaymentTerminalTransactionSummaryFetchRequest": PaymentTerminalTransactionSummaryFetchRequest_1.PaymentTerminalTransactionSummaryFetchRequest,
    "PaymentTerminalType": PaymentTerminalType_1.PaymentTerminalType,
    "Permission": Permission_1.Permission,
    "Refund": Refund_1.Refund,
    "RefundComment": RefundComment_1.RefundComment,
    "RefundCreate": RefundCreate_1.RefundCreate,
    "RenderedDocument": RenderedDocument_1.RenderedDocument,
    "RenderedTerminalReceipt": RenderedTerminalReceipt_1.RenderedTerminalReceipt,
    "RenderedTerminalTransactionSummary": RenderedTerminalTransactionSummary_1.RenderedTerminalTransactionSummary,
    "ResourcePath": ResourcePath_1.ResourcePath,
    "RestAddressFormat": RestAddressFormat_1.RestAddressFormat,
    "RestCountry": RestCountry_1.RestCountry,
    "RestCountryState": RestCountryState_1.RestCountryState,
    "RestCurrency": RestCurrency_1.RestCurrency,
    "RestLanguage": RestLanguage_1.RestLanguage,
    "Role": Role_1.Role,
    "SalesChannel": SalesChannel_1.SalesChannel,
    "Scope": Scope_1.Scope,
    "ServerError": ServerError_1.ServerError,
    "ShopifyIntegration": ShopifyIntegration_1.ShopifyIntegration,
    "ShopifyRecurringOrderUpdateRequest": ShopifyRecurringOrderUpdateRequest_1.ShopifyRecurringOrderUpdateRequest,
    "ShopifySubscriber": ShopifySubscriber_1.ShopifySubscriber,
    "ShopifySubscriberActive": ShopifySubscriberActive_1.ShopifySubscriberActive,
    "ShopifySubscriberCreation": ShopifySubscriberCreation_1.ShopifySubscriberCreation,
    "ShopifySubscription": ShopifySubscription_1.ShopifySubscription,
    "ShopifySubscriptionAddressCreate": ShopifySubscriptionAddressCreate_1.ShopifySubscriptionAddressCreate,
    "ShopifySubscriptionCreationRequest": ShopifySubscriptionCreationRequest_1.ShopifySubscriptionCreationRequest,
    "ShopifySubscriptionModelBillingConfiguration": ShopifySubscriptionModelBillingConfiguration_1.ShopifySubscriptionModelBillingConfiguration,
    "ShopifySubscriptionModelItem": ShopifySubscriptionModelItem_1.ShopifySubscriptionModelItem,
    "ShopifySubscriptionModelTaxLine": ShopifySubscriptionModelTaxLine_1.ShopifySubscriptionModelTaxLine,
    "ShopifySubscriptionProduct": ShopifySubscriptionProduct_1.ShopifySubscriptionProduct,
    "ShopifySubscriptionSuspension": ShopifySubscriptionSuspension_1.ShopifySubscriptionSuspension,
    "ShopifySubscriptionSuspensionCreate": ShopifySubscriptionSuspensionCreate_1.ShopifySubscriptionSuspensionCreate,
    "ShopifySubscriptionUpdateAddressesRequest": ShopifySubscriptionUpdateAddressesRequest_1.ShopifySubscriptionUpdateAddressesRequest,
    "ShopifySubscriptionUpdateRequest": ShopifySubscriptionUpdateRequest_1.ShopifySubscriptionUpdateRequest,
    "ShopifySubscriptionVersion": ShopifySubscriptionVersion_1.ShopifySubscriptionVersion,
    "ShopifySubscriptionVersionItem": ShopifySubscriptionVersionItem_1.ShopifySubscriptionVersionItem,
    "ShopifyTaxLine": ShopifyTaxLine_1.ShopifyTaxLine,
    "Space": Space_1.Space,
    "SpaceAddress": SpaceAddress_1.SpaceAddress,
    "SpaceAddressCreate": SpaceAddressCreate_1.SpaceAddressCreate,
    "SpaceView": SpaceView_1.SpaceView,
    "StaticValue": StaticValue_1.StaticValue,
    "Tax": Tax_1.Tax,
    "TaxCreate": TaxCreate_1.TaxCreate,
    "TenantDatabase": TenantDatabase_1.TenantDatabase,
    "TerminalReceiptFetchRequest": TerminalReceiptFetchRequest_1.TerminalReceiptFetchRequest,
    "Token": Token_1.Token,
    "TokenVersion": TokenVersion_1.TokenVersion,
    "TokenVersionType": TokenVersionType_1.TokenVersionType,
    "Transaction": Transaction_1.Transaction,
    "TransactionAwareEntity": TransactionAwareEntity_1.TransactionAwareEntity,
    "TransactionComment": TransactionComment_1.TransactionComment,
    "TransactionCompletionRequest": TransactionCompletionRequest_1.TransactionCompletionRequest,
    "TransactionGroup": TransactionGroup_1.TransactionGroup,
    "TransactionInvoiceComment": TransactionInvoiceComment_1.TransactionInvoiceComment,
    "TransactionInvoiceReplacement": TransactionInvoiceReplacement_1.TransactionInvoiceReplacement,
    "TransactionLineItemVersionCreate": TransactionLineItemVersionCreate_1.TransactionLineItemVersionCreate,
    "TwoFactorAuthenticationType": TwoFactorAuthenticationType_1.TwoFactorAuthenticationType,
    "User": User_1.User,
    "UserAccountRole": UserAccountRole_1.UserAccountRole,
    "UserSpaceRole": UserSpaceRole_1.UserSpaceRole,
    "WebhookIdentity": WebhookIdentity_1.WebhookIdentity,
    "WebhookListener": WebhookListener_1.WebhookListener,
    "WebhookListenerEntity": WebhookListenerEntity_1.WebhookListenerEntity,
    "WebhookUrl": WebhookUrl_1.WebhookUrl,
    "AccountCreate": AccountCreate_1.AccountCreate,
    "AccountUpdate": AccountUpdate_1.AccountUpdate,
    "ApplicationUser": ApplicationUser_1.ApplicationUser,
    "ApplicationUserCreate": ApplicationUserCreate_1.ApplicationUserCreate,
    "ApplicationUserUpdate": ApplicationUserUpdate_1.ApplicationUserUpdate,
    "Charge": Charge_1.Charge,
    "ChargeAttempt": ChargeAttempt_1.ChargeAttempt,
    "ChargeBankTransaction": ChargeBankTransaction_1.ChargeBankTransaction,
    "ChargeFlowLevel": ChargeFlowLevel_1.ChargeFlowLevel,
    "ChargeFlowLevelPaymentLink": ChargeFlowLevelPaymentLink_1.ChargeFlowLevelPaymentLink,
    "ConnectorInvocation": ConnectorInvocation_1.ConnectorInvocation,
    "CustomerActive": CustomerActive_1.CustomerActive,
    "CustomerAddressActive": CustomerAddressActive_1.CustomerAddressActive,
    "CustomerAddressCreate": CustomerAddressCreate_1.CustomerAddressCreate,
    "CustomerCommentActive": CustomerCommentActive_1.CustomerCommentActive,
    "CustomerCommentCreate": CustomerCommentCreate_1.CustomerCommentCreate,
    "CustomerCreate": CustomerCreate_1.CustomerCreate,
    "DeliveryIndication": DeliveryIndication_1.DeliveryIndication,
    "HumanUserCreate": HumanUserCreate_1.HumanUserCreate,
    "HumanUserUpdate": HumanUserUpdate_1.HumanUserUpdate,
    "InvoiceReconciliationRecord": InvoiceReconciliationRecord_1.InvoiceReconciliationRecord,
    "InvoiceReimbursementWithRefundReference": InvoiceReimbursementWithRefundReference_1.InvoiceReimbursementWithRefundReference,
    "PaymentLinkActive": PaymentLinkActive_1.PaymentLinkActive,
    "PaymentLinkCreate": PaymentLinkCreate_1.PaymentLinkCreate,
    "RefundBankTransaction": RefundBankTransaction_1.RefundBankTransaction,
    "RefundCommentActive": RefundCommentActive_1.RefundCommentActive,
    "RefundCommentCreate": RefundCommentCreate_1.RefundCommentCreate,
    "RefundRecoveryBankTransaction": RefundRecoveryBankTransaction_1.RefundRecoveryBankTransaction,
    "ShopifyRecurringOrder": ShopifyRecurringOrder_1.ShopifyRecurringOrder,
    "ShopifySubscriptionAddress": ShopifySubscriptionAddress_1.ShopifySubscriptionAddress,
    "ShopifySubscriptionProductCreate": ShopifySubscriptionProductCreate_1.ShopifySubscriptionProductCreate,
    "ShopifySubscriptionProductUpdate": ShopifySubscriptionProductUpdate_1.ShopifySubscriptionProductUpdate,
    "ShopifyTransaction": ShopifyTransaction_1.ShopifyTransaction,
    "SpaceCreate": SpaceCreate_1.SpaceCreate,
    "SpaceUpdate": SpaceUpdate_1.SpaceUpdate,
    "TokenCreate": TokenCreate_1.TokenCreate,
    "TokenUpdate": TokenUpdate_1.TokenUpdate,
    "TransactionCommentActive": TransactionCommentActive_1.TransactionCommentActive,
    "TransactionCommentCreate": TransactionCommentCreate_1.TransactionCommentCreate,
    "TransactionCompletion": TransactionCompletion_1.TransactionCompletion,
    "TransactionCreate": TransactionCreate_1.TransactionCreate,
    "TransactionInvoice": TransactionInvoice_1.TransactionInvoice,
    "TransactionInvoiceCommentActive": TransactionInvoiceCommentActive_1.TransactionInvoiceCommentActive,
    "TransactionInvoiceCommentCreate": TransactionInvoiceCommentCreate_1.TransactionInvoiceCommentCreate,
    "TransactionLineItemVersion": TransactionLineItemVersion_1.TransactionLineItemVersion,
    "TransactionPending": TransactionPending_1.TransactionPending,
    "TransactionVoid": TransactionVoid_1.TransactionVoid,
    "WebhookListenerCreate": WebhookListenerCreate_1.WebhookListenerCreate,
    "WebhookListenerUpdate": WebhookListenerUpdate_1.WebhookListenerUpdate,
    "WebhookUrlCreate": WebhookUrlCreate_1.WebhookUrlCreate,
    "WebhookUrlUpdate": WebhookUrlUpdate_1.WebhookUrlUpdate,
    "ApplicationUserCreateWithMacKey": ApplicationUserCreateWithMacKey_1.ApplicationUserCreateWithMacKey,
};
