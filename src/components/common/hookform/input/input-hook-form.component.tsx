import React, { FC } from "react"
import { Input } from "@Components/common/ui"
import { useFormContext } from "react-hook-form"
import { InputHookProps } from "./input-hook-form.type"
import { FieldHookForm } from "@Components/common/hookform/index"
import InputNormal from "@Components/common/ui/input/input-normal.component"

const InputHookForm: FC<InputHookProps> = props => {
  const { name, label, placeholder } = props
  const { register } = useFormContext()

  return (
    <FieldHookForm name={name} label={label}>
      <Input {...register(name)} placeholder={placeholder} />
      {/* <InputNormal {...register(name)} placeholder={placeholder}/> */}
    </FieldHookForm>
  )
}

export { InputHookForm }
