declare class ObjectSerializer {
    static primitives: Array<string>;
    static enumsMap: {
        [index: string]: any;
    };
    static typeMap: {
        [index: string]: any;
    };
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export { ObjectSerializer };
