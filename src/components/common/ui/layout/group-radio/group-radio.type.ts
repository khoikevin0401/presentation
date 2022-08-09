import { StackDirection, UseRadioGroupProps } from "@chakra-ui/react"

export interface GroupProps extends UseRadioGroupProps {
  name?: any
  value?: any
  options?: Array<any>
  label?: string
  keyValue?: any
  nameValue?: string | any
  setValue: (val: string) => void
  direction?: StackDirection
}