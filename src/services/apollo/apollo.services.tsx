import * as React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client"

export const BASE_URL = process.env.SUPAH_CMS_API_BASE_URL

export const CLIENT = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
})

export const ApolloProviderServer : React.FC = ({children}) => {
  return (
    <ApolloProvider client={CLIENT}>
      {children}
    </ApolloProvider>
  )
}
