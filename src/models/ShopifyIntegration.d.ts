import { CreationEntityState } from "./CreationEntityState";
import { PaymentMethodConfiguration } from "./PaymentMethodConfiguration";
import { ShopifyAdditionalLineItemData } from "./ShopifyAdditionalLineItemData";
import { ShopifyIntegrationPaymentAppVersion } from "./ShopifyIntegrationPaymentAppVersion";
import { ShopifyIntegrationSubscriptionAppVersion } from "./ShopifyIntegrationSubscriptionAppVersion";
declare class ShopifyIntegration {
    /**
    *
    */
    'additionalLineItemData'?: Array<ShopifyAdditionalLineItemData>;
    /**
    *
    */
    'allowInvoiceDownload'?: boolean;
    /**
    *
    */
    'allowedPaymentMethodConfigurations'?: Array<PaymentMethodConfiguration>;
    /**
    *
    */
    'currency'?: string;
    /**
    * The ID is the primary key of the entity. The ID identifies the entity uniquely.
    */
    'id'?: number;
    /**
    * Enabling the integrated payment form will embed the payment form in the Shopify shop. The app needs to be installed for this to be possible.
    */
    'integratedPaymentFormEnabled'?: boolean;
    /**
    * The checkout language forces a specific language in the checkout. Without a checkout language the browser setting of the buyer is used to determine the language.
    */
    'language'?: string;
    /**
    * The login name is used to link a specific Shopify payment gateway to this integration.This login name is to be filled into the appropriate field in the shops payment gateway configuration.
    */
    'loginName'?: string;
    /**
    * The integration name is used internally to identify a specific integration.For example the name is used withinsearch fields and hence it should be distinct and descriptive.
    */
    'name'?: string;
    /**
    *
    */
    'paymentAppVersion'?: ShopifyIntegrationPaymentAppVersion;
    /**
    *
    */
    'paymentInstalled'?: boolean;
    /**
    * Define the path of the proxy URL. This only needs to be changed if the apps proxy URL is overwritten in the Shopify store.
    */
    'paymentProxyPath'?: string;
    /**
    * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
    */
    'plannedPurgeDate'?: Date;
    /**
    *
    */
    'replacePaymentMethodImage'?: boolean;
    /**
    * The store address is used to link a specific Shopify shop to this integration. This is the name used in the Shopifys admin URL: [storeAddress].myshopify.com
    */
    'shopName'?: string;
    /**
    *
    */
    'showPaymentInformation'?: boolean;
    /**
    *
    */
    'showSubscriptionInformation'?: boolean;
    /**
    *
    */
    'spaceId'?: number;
    /**
    *
    */
    'spaceViewId'?: number;
    /**
    *
    */
    'state'?: CreationEntityState;
    /**
    *
    */
    'subscriptionAppVersion'?: ShopifyIntegrationSubscriptionAppVersion;
    /**
    *
    */
    'subscriptionInstalled'?: boolean;
    /**
    * Define the path of the proxy URL. This only needs to be changed if the apps proxy URL is overwritten in the Shopify store.
    */
    'subscriptionProxyPath'?: string;
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
export { ShopifyIntegration };
