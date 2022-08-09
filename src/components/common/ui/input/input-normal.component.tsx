import React, { FC } from "react"
import { Input as InputChakra } from "@chakra-ui/react"
import { InputProps } from "./input.type"

const Input: FC<InputProps> = (props: InputProps) => {
  const { label, type, ...rest } = props

  return (
    <InputChakra
      type={"text"}
      {...rest}
      borderRadius={"md"}
      fontSize={"sm"}
      height={"45px"}
    />
  )
}

export default Input
