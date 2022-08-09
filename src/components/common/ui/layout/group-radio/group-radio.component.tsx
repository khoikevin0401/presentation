import { forwardRef, RadioGroup, Stack } from "@chakra-ui/react"
import React, { FC } from "react"

import { GroupProps } from "@Components/common/ui/layout/group-radio/group-radio.type"
import { RadioCustom } from "@Components/common/ui/radio/radio.component"
import { Field } from "@Components/common/ui/layout/field/field.component"
import { useFormContext } from "react-hook-form"

const GroupRadio: FC<GroupProps> = forwardRef((props: GroupProps, ref) => {
  const {
    name,
    label,
    options,
    value,
    keyValue,
    nameValue,
    setValue,
    direction,
  } = props

  const { register } = useFormContext()

  return (
    <Field label={label}>
      <RadioGroup
        ref={ref}
        value={value}
        onChange={(val: string) => setValue(val)}
        height="45px"
      >
        <Stack direction={direction} height="100%">
          {options &&
            options.map((item: any, index: number) => {
              return (
                <RadioCustom
                  {...register(name)}
                  key={index}
                  value={item[keyValue]}
                  displayName={item[nameValue]}
                />
              )
            })}
        </Stack>
      </RadioGroup>
    </Field>
  )
})

export { GroupRadio }
