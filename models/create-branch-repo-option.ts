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
 * CreateBranchRepoOption options when creating a branch in a repository
 * @export
 * @interface CreateBranchRepoOption
 */
export interface CreateBranchRepoOption {
    /**
     * Name of the branch to create
     * @type {string}
     * @memberof CreateBranchRepoOption
     */
    'new_branch_name': string;
    /**
     * Deprecated: true Name of the old branch to create from
     * @type {string}
     * @memberof CreateBranchRepoOption
     */
    'old_branch_name'?: string;
    /**
     * Name of the old branch/tag/commit to create from
     * @type {string}
     * @memberof CreateBranchRepoOption
     */
    'old_ref_name'?: string;
}

