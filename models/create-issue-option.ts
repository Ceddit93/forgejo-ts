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
 * CreateIssueOption options to create one issue
 * @export
 * @interface CreateIssueOption
 */
export interface CreateIssueOption {
    /**
     * 
     * @type {string}
     * @memberof CreateIssueOption
     */
    'title': string;
    /**
     * deprecated
     * @type {string}
     * @memberof CreateIssueOption
     */
    'assignee'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateIssueOption
     */
    'assignees'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueOption
     */
    'body'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateIssueOption
     */
    'closed'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueOption
     */
    'due_date'?: string;
    /**
     * list of label ids
     * @type {Array<number>}
     * @memberof CreateIssueOption
     */
    'labels'?: Array<number>;
    /**
     * milestone id
     * @type {number}
     * @memberof CreateIssueOption
     */
    'milestone'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueOption
     */
    'ref'?: string;
}

