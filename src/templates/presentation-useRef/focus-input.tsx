import { Box, Button, Input } from "@chakra-ui/react"
import React, { FC, useRef } from "react"

const FocusInput: FC = () => {
  const refInput = useRef(null)

  const focusInput = () => {
    (refInput.current as any).focus()
  }
  return (
    <Box>
      <Box display={"flex"}>
        <Input
          type={"text"}
          borderRadius={"md"}
          fontSize={"sm"}
          height={"40px"}
          ref={refInput}
        />
        <Button
          ml={"15px"}
          rounded={"md"}
          border={"1px solid #8d81e8"}
          bgColor={"white"}
          color={"#8d81e8"}
          onClick={focusInput}
        >
          Focus
        </Button>
      </Box>
    </Box>
  )
}

export default FocusInput
