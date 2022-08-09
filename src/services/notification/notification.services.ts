import { gql } from "@apollo/client"

export const GET_ALL_MESSAGE = gql`
query getAllMessage($start: Float!, $limit: Float!) {
    getAllMessage(start: $start, limit: $limit) {
        count
        data {
            id
            message_id
            topic_id
            topic_name
            title
            body
            description
            customer_name
            customer_id
        }
    }
}
`

export const PushMessage = gql`
  mutation push($input: PushMessageInput!) {
    push(input: $input) {
      id
      message_id
      topic_id
      topic_name
      customer_id
      customer_name
      title
      body
      description
    }
  }
`
export const AllTopic = gql`
  query getAllTopic {
    getAllTopic {
      id
      name
      displayName
      arn
      status
    }
  }
`

export const SearchCustomers = gql`
  query searchCustomers($input: SearchCustomersInput!) {
    searchCustomers(input: $input) {
      count
      data {
        party_id
        name
        mobileNumber
      }
    }
  }
`

export const CreateNewTopic = gql`
  mutation createNewTopic($input: CreateNewTopicInput!) {
    createNewTopic(input: $input) {
      id
    }
  }
`
export const SearchCustomes = gql`
query searchCustomers($input: SearchCustomersInput!) {
  searchCustomers(input: $input){
   count 
   data {
       party_id
       name
       mobileNumber
       }
  }
}`