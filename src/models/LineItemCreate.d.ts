import { LineItemAttributeCreate } from "./LineItemAttributeCreate";
import { LineItemType } from "./LineItemType";
import { TaxCreate } from "./TaxCreate";
declare class LineItemCreate {
    /**
    *
    */
    'amountIncludingTax': number;
    /**
    *
    */
    'attributes'?: {
        [key: string]: LineItemAttributeCreate;
    };
    /**
    *
    */
    'discountIncludingTax'?: number;
    /**
    *
    */
    'name': string;
    /**
    *
    */
    'quantity': number;
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
    'taxes'?: Array<TaxCreate>;
    /**
    *
    */
    'type': LineItemType;
    /**
    * The unique id identifies the line item within the set of line items associated with the transaction.
    */
    'uniqueId': string;
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
export { LineItemCreate };
