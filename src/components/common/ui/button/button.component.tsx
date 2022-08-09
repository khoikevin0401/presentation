import React, { FC } from "react"
import {Button} from "@chakra-ui/react"
import { ButtonProps } from "@Components/common/ui/button/button.type"

const ButtonCustom: FC<ButtonProps> = (props) => {
  const { ...rest } = props

  return <Button {...rest} ></Button>
}

export { ButtonCustom }
