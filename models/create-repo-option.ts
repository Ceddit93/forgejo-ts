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
 * CreateRepoOption options when creating repository
 * @export
 * @interface CreateRepoOption
 */
export interface CreateRepoOption {
    /**
     * Name of the repository to create
     * @type {string}
     * @memberof CreateRepoOption
     */
    'name': string;
    /**
     * Whether the repository should be auto-initialized?
     * @type {boolean}
     * @memberof CreateRepoOption
     */
    'auto_init'?: boolean;
    /**
     * DefaultBranch of the repository (used when initializes and in template)
     * @type {string}
     * @memberof CreateRepoOption
     */
    'default_branch'?: string;
    /**
     * Description of the repository to create
     * @type {string}
     * @memberof CreateRepoOption
     */
    'description'?: string;
    /**
     * Gitignores to use
     * @type {string}
     * @memberof CreateRepoOption
     */
    'gitignores'?: string;
    /**
     * Label-Set to use
     * @type {string}
     * @memberof CreateRepoOption
     */
    'issue_labels'?: string;
    /**
     * License to use
     * @type {string}
     * @memberof CreateRepoOption
     */
    'license'?: string;
    /**
     * Whether the repository is private
     * @type {boolean}
     * @memberof CreateRepoOption
     */
    'private'?: boolean;
    /**
     * Readme of the repository to create
     * @type {string}
     * @memberof CreateRepoOption
     */
    'readme'?: string;
    /**
     * Whether the repository is template
     * @type {boolean}
     * @memberof CreateRepoOption
     */
    'template'?: boolean;
    /**
     * TrustModel of the repository
     * @type {string}
     * @memberof CreateRepoOption
     */
    'trust_model'?: CreateRepoOptionTrustModelEnum;
}

export const CreateRepoOptionTrustModelEnum = {
    Default: 'default',
    Collaborator: 'collaborator',
    Committer: 'committer',
    Collaboratorcommitter: 'collaboratorcommitter'
} as const;

export type CreateRepoOptionTrustModelEnum = typeof CreateRepoOptionTrustModelEnum[keyof typeof CreateRepoOptionTrustModelEnum];


