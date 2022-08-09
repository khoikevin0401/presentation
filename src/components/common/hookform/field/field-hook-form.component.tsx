import React, { FC } from "react"
import { Box, Text } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

import { Field } from "@Components/common/ui/layout/field/field.component"
import { FieldHookProps } from "./field-hook-form.type"

const FieldHookForm: FC<FieldHookProps> = props => {
  const { children, name, label } = props

  const {
    formState: { errors },
  } = useFormContext()

  return (
    <Box>
      <Field label={label}>
        {children}
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }: any) => (
            <Text variant="error" mt={"2px"}>
              {message}
            </Text>
          )}
        />
      </Field>
    </Box>
  )
}

export { FieldHookForm }
