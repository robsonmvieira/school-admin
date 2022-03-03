import { gql } from "@apollo/client";

export const QUERY_FIND_CATEGORIES = gql`
query loadCategories {
  findAllCategories {
    id,
    title,
    createdAt,
    updatedAt
  }
}
`
