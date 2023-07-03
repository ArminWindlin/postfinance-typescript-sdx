import { LineItemAttribute } from "./LineItemAttribute";
import { LineItemType } from "./LineItemType";
import { Tax } from "./Tax";
declare class LineItem {
    /**
    * The aggregated tax rate is the sum of all tax rates of the line item.
    */
    'aggregatedTaxRate'?: number;
    /**
    *
    */
    'amountExcludingTax'?: number;
    /**
    *
    */
    'amountIncludingTax'?: number;
    /**
    *
    */
    'attributes'?: {
        [key: string]: LineItemAttribute;
    };
    /**
    *
    */
    'discountExcludingTax'?: number;
    /**
    *
    */
    'discountIncludingTax'?: number;
    /**
    *
    */
    'name'?: string;
    /**
    *
    */
    'quantity'?: number;
    /**
    *
    */
    'shippingRequired'?: boolean;
    /**
    *
    */
    'sku'?: string;
    /**
    *
    */
    'taxAmount'?: number;
    /**
    *
    */
    'taxAmountPerUnit'?: number;
    /**
    *
    */
    'taxes'?: Array<Tax>;
    /**
    *
    */
    'type'?: LineItemType;
    /**
    *
    */
    'undiscountedAmountExcludingTax'?: number;
    /**
    *
    */
    'undiscountedAmountIncludingTax'?: number;
    /**
    *
    */
    'undiscountedUnitPriceExcludingTax'?: number;
    /**
    *
    */
    'undiscountedUnitPriceIncludingTax'?: number;
    /**
    * The unique id identifies the line item within the set of line items associated with the transaction.
    */
    'uniqueId'?: string;
    /**
    *
    */
    'unitPriceExcludingTax'?: number;
    /**
    *
    */
    'unitPriceIncludingTax'?: number;
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
export { LineItem };
