import React, { FC, forwardRef } from "react"
import { Input as InputChakra } from "@chakra-ui/react"
import { InputProps } from "./input.type"

const Input: FC<InputProps> = forwardRef((props: InputProps, ref: any) => {
  const { label, type, ...rest } = props

  return (
    <InputChakra
      type={"text"}
      ref={ref}
      {...rest}
      borderRadius={"md"}
      fontSize={"sm"}
      height={"45px"}
    />
  )
})

export { Input }
