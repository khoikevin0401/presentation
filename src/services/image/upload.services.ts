import { gql } from "@apollo/client"

export const UPLOAD_FILE = gql`
  mutation uploadFileToS3($data: UploadFileInput!) {
    uploadFileToS3(base64String: $data) {
      url
    }
  }
`

export const UPLOAD_MULTIPLE = gql`
  mutation getPresignedUrl($input: [FileNames!]!) {
    getPresignedUrl(fileNames: $input) {
      link
      filename
    }
  }
`

export const GET_ALL_IMAGE = gql`
  query getAllFiles($pagination: PaginationInput!) {
    getAllFiles(pagination: $pagination) {
      items {
        link
        filename
        createdAt
      }
      pagination {
        totalRows
        page
        pageSize
      }
    }
  }
`

export const DELETE_IMAGE = gql`
  mutation deleteFile($filename: String!) {
    deleteFile(filename: $filename)
  }
`

export const UPDATE_IMAGE = gql`
  mutation updateFile($input: String!) {
    updateFile(filename: $input) {
      link
      filename
    }
  }
`

export const GET_IMAGE = gql`
  mutation getOne($input: String!) {
    getOne(filename: $input)
  }
`
