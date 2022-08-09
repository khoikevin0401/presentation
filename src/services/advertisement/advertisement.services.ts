import { gql } from "@apollo/client"

export const GET_ALL_ADVERTISING = gql`
query getAllAdsvertising($pagination: PaginationInput!, $is_deleted: Boolean!) {
  getAllAdsvertising(pagination:$pagination,
    is_deleted:$is_deleted) {
    items{
      id
      name
      is_active
      description
      priority
      createdAt
      updatedAt
      total_view_customer
      total_view_token
      image
      action {
        name
        display_name
        deep_link
      }
    }
    pagination {
      totalRows
      page
      pageSize
    }
  }
}
`
export const CREATE_ADVERTISEMENT = gql`
mutation createAdvertising($input: CreateAdvertisingInput!,$action: CreateActionInput!) {
    createAdvertising(input: $input, action:$action) {
      id,
      name,
      total_view_token,
      total_view_customer,
      description,
      priority,
      image,
      is_active,
      createdAt,
      updatedAt,
      action {
        id,
        name,
        deep_link,
        display_name
      }
    }
  }
`
export const DELETE_AD = gql`
  mutation deleteAd($id: String!) {
    deleteAd(id: $id)
  }
`
export const GET_ONE_AD = gql`
  query getOneAd($id: String!) {
    getOneAd(id: $id) {
      name
      description
      total_view_token
      total_view_customer
      image
      is_active
      createdAt
      updatedAt
      action {
        name
        deep_link
        display_name
      }
    }
  }
`
export const UPDATE_AD = gql`
  mutation updateAd(
    $id: String!,
    $input: UpdateAdvertisingInput!
    $action: InputActionUpdate!
  ){
      updateAd(id:$id,input:$input,action:$action) 
  }
`
export const SEARCH_USER = gql`
query getUserBySearchTerm($search: String!, $pagination: PaginationInput!)  {
  getUserBySearchTerm(search:$search, pagination:$pagination){
    items{
      name,
      status,
      party_id,
      customerNumber,
      mobileNumber
    },
    pagination {
      page,
      pageSize,
      totalRows
    }
  }
}
`
export const SET_AD_FOR_USER = gql`
mutation setAdForUsers($adId: String!, $cusIds: [String!]!) {
  setAdForUsers(adId:$adId, cusIds:$cusIds) {
    party_id,
    advertising_id
  }
}
`