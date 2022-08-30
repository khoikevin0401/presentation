import React from "react"
import { Router } from "@reach/router"
import { ChakraProvider } from "@chakra-ui/react"

import theme from "@Components/common/theme/theme"
import PresentationUseRef from "@Templates/presentation-useRef"
import PresentationCreatePortal from "@Templates/presentation-create-portal"
import PresentationUseReducer from "@Templates/presentation-useReducer"


const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <PresentationUseRef path="/presentation-useref" default />
        <PresentationCreatePortal path="/portal" />
        <PresentationUseReducer path="/presentation-usereducer" />
      </Router>
    </ChakraProvider>
  )
}

export default IndexPage
