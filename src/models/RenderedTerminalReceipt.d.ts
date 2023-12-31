import { PaymentTerminalReceiptType } from "./PaymentTerminalReceiptType";
declare class RenderedTerminalReceipt {
    /**
    * The data property contains the binary data of the receipt document encoded as base 64 encoded string.
    */
    'data'?: Array<string>;
    /**
    * The mime type indicates the format of the receipt document. The mime type depends on the requested receipt format.
    */
    'mimeType'?: string;
    /**
    * The terminal might or might not print the receipt. This property is set to true when the configuration of the terminal forces the printing and the device supports the receipt printing.
    */
    'printed'?: boolean;
    /**
    * Each receipt has a different usage. The receipt type indicates for what resp. for whom the document is for.
    */
    'receiptType'?: PaymentTerminalReceiptType;
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
export { RenderedTerminalReceipt };
