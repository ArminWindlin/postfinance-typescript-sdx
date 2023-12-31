import { TerminalReceiptFormat } from "./TerminalReceiptFormat";
declare class TerminalReceiptFetchRequest {
    /**
    * The format determines in what format the receipts will be returned in.
    */
    'format': TerminalReceiptFormat;
    /**
    * Provide here the ID of the transaction for which the receipts should be fetched.
    */
    'transaction': number;
    /**
    * The width controls how width the document will be rendered. In case of the PDF format the width is in mm. In case of the text format the width is in the number of chars per line.
    */
    'width'?: number;
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
export { TerminalReceiptFetchRequest };
