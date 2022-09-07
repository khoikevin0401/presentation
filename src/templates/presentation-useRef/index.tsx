import React, { FC, FormEvent, useState } from "react"
import { Box, Select } from "@chakra-ui/react"
import { RouteComponentProps } from "@reach/router"

import { Wrapper } from "@Components/common/ui"
import FormUncontrolled from "./form-uncontrolled"
import FormControlled from "./form-controlled"
import FocusInput from "./focus-input"

const PresentationUseRef: FC = () => {
  const [option, setOption] = useState<number>(0)

  const changeOption = (e: FormEvent) => {
    setOption(parseInt((e.target as any).value))
  }

  return (
    <Wrapper>
      <Box w={"340px"}>
        <Select mb={"40px"} value={option} onChange={changeOption}>
          <option value="0">Focus input</option>
          <option value="1">Form controlled</option>
          <option value="2">Form uncontrolled</option>
        </Select>
        {
          {
            "0": <FocusInput />,
            "1": <FormControlled />,
            "2": <FormUncontrolled />,
          }[option]
        }
      </Box>
    </Wrapper>
  )
}

export default PresentationUseRef
