import * as ChakraUIInput from "@chakra-ui/input"
import { FieldProps } from "@Components/common/ui/layout/field/field.type"

export interface InputProps extends FieldProps, ChakraUIInput.InputProps {
  name: string
}
