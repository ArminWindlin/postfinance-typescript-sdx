import { AbstractRefundCommentActive } from "./AbstractRefundCommentActive";
declare class RefundCommentCreate extends AbstractRefundCommentActive {
    /**
    *
    */
    'refund': number;
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
export { RefundCommentCreate };
