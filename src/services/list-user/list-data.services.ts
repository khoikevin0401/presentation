import { gql } from "@apollo/client"

export const LIST_DATA_USER_LOCATION = gql`
query getAllUserLocation($input: String!, $pagination: PaginationInput!) {
  getAllUserLocation(inputSearch:$input, pagination:$pagination) {
    items{
      firstname,
      lastname,
      phone,
      location,
      createdAt
    },
    pagination {
      totalRows,
      page,
      pageSize
    }
  }
}
`

export const LIST_DATA_USER_INFOR = gql`
query getAllUserInfo($input: String!, $pagination: PaginationInput!) {
  getAllUserInfo(inputSearch:$input, pagination:$pagination) {
    items{
      fullname,
      email,
      message,
      createdAt
    },
    pagination {
      totalRows,
      page,
      pageSize
    }
  }
}
`
