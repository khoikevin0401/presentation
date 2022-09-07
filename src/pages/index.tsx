import React from "react"
import { Router } from "@reach/router"
import { ChakraProvider } from "@chakra-ui/react"

import theme from "@Components/common/theme/theme"
import HomePage from "@Templates/home"


const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <HomePage path="/"/>
      </Router>
    </ChakraProvider>
  )
}

export default IndexPage
