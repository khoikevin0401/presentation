import React, { FC } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { FormValues } from "./presentation.type"
import { schema } from "./presentation.schema"

import { InputHookForm } from "@Components/common/hookform"
import { ButtonCustom } from "@Components/common/ui"
import { Box } from "@chakra-ui/react"

const FormUncontrolled: FC = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const submitForm = async (data: FormValues): Promise<void> => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitForm)}>
        <Box mb="24px">
          <InputHookForm
            label="First Name"
            placeholder="Your first name"
            name="firstName"
          />
        </Box>

        <Box mb="24px">
          <InputHookForm
            label="Last Name"
            placeholder="Your last name"
            name="lastName"
          />
        </Box>

        <ButtonCustom
          fontSize="14px"
          spinnerPlacement="end"
          type="submit"
          variant={"singin"}
        >
          Submit
        </ButtonCustom>
      </form>
    </FormProvider>
  )
}

export default FormUncontrolled
