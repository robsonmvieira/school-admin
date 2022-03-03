/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: loadCategories
// ====================================================

export interface loadCategories_findAllCategories {
  __typename: "CategoryType";
  id: string;
  /**
   * Category Title
   */
  title: string;
  /**
   * Created At
   */
  createdAt: any;
  /**
   * Update At
   */
  updatedAt: any;
}

export interface loadCategories {
  findAllCategories: loadCategories_findAllCategories[];
}
