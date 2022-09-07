import React, { FC, FormEvent, useState } from "react"
import { Box, Select } from "@chakra-ui/react"
import { RouteComponentProps } from "@reach/router"

import PresentationUseRef from "@Templates/presentation-useRef"
import PresentationCreatePortal from "@Templates/presentation-create-portal"
import PresentationUseReducer from "@Templates/presentation-useReducer"

const HomePage: FC<RouteComponentProps> = () => {
  const [option, setOption] = useState<number>(0)

  const changeOption = (e: FormEvent) => {
    setOption(parseInt((e.target as any).value))
  }
  return (
    <Box>
      <Box position={"relative"}>
        <Select position={"absolute"} right={"50px"} top={"50px"} w={"300px"} mb={"40px"} value={option} onChange={changeOption}>
          <option value="0">useRef</option>
          <option value="1">useReducer</option>
          <option value="2">createPortal</option>
        </Select>
        {
          {
            "0": <PresentationUseRef />,
            "1": <PresentationUseReducer />,
            "2": <PresentationCreatePortal />,
          }[option]
        }
      </Box>
    </Box>
  )
}

export default HomePage
