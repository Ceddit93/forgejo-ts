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
 * CreateOAuth2ApplicationOptions holds options to create an oauth2 application
 * @export
 * @interface CreateOAuth2ApplicationOptions
 */
export interface CreateOAuth2ApplicationOptions {
    /**
     * 
     * @type {boolean}
     * @memberof CreateOAuth2ApplicationOptions
     */
    'confidential_client'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateOAuth2ApplicationOptions
     */
    'name'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateOAuth2ApplicationOptions
     */
    'redirect_uris'?: Array<string>;
}

