import React, { FC } from "react"
import { Box } from "@chakra-ui/react"
import { Text } from "@Components/common/ui/text/text.component"
import { FieldProps } from "@Components/common/ui/layout/field/field.type"

const Field: FC<FieldProps> = props => {
  const { children, label, messageError } = props

  return (
    <Box>
      {label && (
        <Text variant="label" mb={"3px"}>
          {label}
        </Text>
      )}

      {children}

      {messageError && (
        <Text variant="error" mt={"2px"}>
          {messageError}
        </Text>
      )}
    </Box>
  )
}

export { Field }
