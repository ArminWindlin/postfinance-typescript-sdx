import { AbstractTransactionCommentActive } from "./AbstractTransactionCommentActive";
declare class TransactionCommentCreate extends AbstractTransactionCommentActive {
    /**
    *
    */
    'transaction': number;
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
export { TransactionCommentCreate };
