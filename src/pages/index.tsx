import React from "react"
import { Router } from "@reach/router"
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloProviderServer } from "@Services/apollo/apollo.services"

import theme from "@Components/common/theme/theme"
import PresentationUseRef from "@Templates/presentation-useRef"

const IndexPage = () => {
  return (
    <ApolloProviderServer>
      <ChakraProvider theme={theme}>
        <Router>
          <PresentationUseRef path="/presentation-useref" default/>
        </Router>
      </ChakraProvider>
    </ApolloProviderServer>
  )
}

export default IndexPage