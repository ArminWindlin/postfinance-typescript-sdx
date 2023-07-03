declare class RenderedDocument {
    /**
    *
    */
    'data'?: Array<string>;
    /**
    *
    */
    'documentTemplateType'?: number;
    /**
    *
    */
    'mimeType'?: string;
    /**
    *
    */
    'title'?: string;
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
export { RenderedDocument };
