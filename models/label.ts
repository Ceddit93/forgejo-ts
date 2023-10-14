/* tslint:disable */
/* eslint-disable */
/**
 * Forgejo API.
 * This documentation describes the Forgejo API.
 *
 * The version of the OpenAPI document: 1.20.5+0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Label a label to an issue or a pr
 * @export
 * @interface Label
 */
export interface Label {
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    'color'?: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    'description'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Label
     */
    'exclusive'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Label
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    'url'?: string;
}

