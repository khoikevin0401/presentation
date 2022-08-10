import React from "react"
import { Router } from "@reach/router"
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloProviderServer } from "@Services/apollo/apollo.services"

import theme from "@Components/common/theme/theme"
import PresentationUseRef from "@Templates/presentation-useRef"
import CounterUserReducer from "@Templates/useReducer/CounterUserReducer"

const IndexPage = () => {
  return (
    <ApolloProviderServer>
      <ChakraProvider theme={theme}>
        <Router>
          <PresentationUseRef path="/presentation-useref" default/>
          <CounterUserReducer path="/usereducer" />
        </Router>
      </ChakraProvider>
    </ApolloProviderServer>
  )
}

export default IndexPage
