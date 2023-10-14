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
import { GPGKeyEmail } from './gpgkey-email';

/**
 * GPGKey a user GPG key to sign commit and tag in repository
 * @export
 * @interface GPGKey
 */
export interface GPGKey {
    /**
     * 
     * @type {boolean}
     * @memberof GPGKey
     */
    'can_certify'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GPGKey
     */
    'can_encrypt_comms'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GPGKey
     */
    'can_encrypt_storage'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GPGKey
     */
    'can_sign'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GPGKey
     */
    'created_at'?: string;
    /**
     * 
     * @type {Array<GPGKeyEmail>}
     * @memberof GPGKey
     */
    'emails'?: Array<GPGKeyEmail>;
    /**
     * 
     * @type {string}
     * @memberof GPGKey
     */
    'expires_at'?: string;
    /**
     * 
     * @type {number}
     * @memberof GPGKey
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof GPGKey
     */
    'key_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof GPGKey
     */
    'primary_key_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof GPGKey
     */
    'public_key'?: string;
    /**
     * 
     * @type {Array<GPGKey>}
     * @memberof GPGKey
     */
    'subkeys'?: Array<GPGKey>;
    /**
     * 
     * @type {boolean}
     * @memberof GPGKey
     */
    'verified'?: boolean;
}

