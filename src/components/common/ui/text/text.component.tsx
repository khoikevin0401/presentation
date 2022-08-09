import React, { FC } from "react"
import * as ChakraUI from "@chakra-ui/react"

import { TextProps } from "@Components/common/ui/text/text.type."

const Text: FC<TextProps> = props => {
  const { ...rest } = props

  return <ChakraUI.Text {...rest} />
}

export { Text }
