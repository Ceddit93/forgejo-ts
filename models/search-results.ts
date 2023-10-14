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


// May contain unused imports in some cases
// @ts-ignore
import { Repository } from './repository';

/**
 * SearchResults results of a successful search
 * @export
 * @interface SearchResults
 */
export interface SearchResults {
    /**
     * 
     * @type {Array<Repository>}
     * @memberof SearchResults
     */
    'data'?: Array<Repository>;
    /**
     * 
     * @type {boolean}
     * @memberof SearchResults
     */
    'ok'?: boolean;
}

