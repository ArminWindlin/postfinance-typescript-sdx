'use strict';
import { FailureCategory } from "./FailureCategory";


class FailureReason {

        /**
        * 
        */
    'category'?: FailureCategory;

        /**
        * 
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'features'?: Array<number>;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'name'?: { [key: string]: string; };


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "category",
        "baseName": "category",
        "type": "FailureCategory"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "features",
        "baseName": "features",
        "type": "Array<number>"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        }        
    ];

    static getAttributeTypeMap() {
        return FailureReason.attributeTypeMap;
    }
}

export { FailureReason }
