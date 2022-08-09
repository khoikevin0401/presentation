import React, { FC, FormEvent, useState } from "react"

import { ButtonCustom } from "@Components/common/ui"
import { Box, Input, Text } from "@chakra-ui/react"

const FormControlled: FC = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  })

  const submitForm = (e: FormEvent) => {
    e.preventDefault()
  }

  const changeForm = (e: FormEvent) => {
    const name = (e.target as any).name
    const value = (e.target as any).value
    setData(preData => ({ ...preData, [name]: value }))
  }

  console.log("render")

  return (
    <form onSubmit={submitForm}>
      <Box mb="24px">
        <Text variant="label" mb={"3px"}>
          First Name
        </Text>
        <Input
          value={data.firstName}
          onChange={changeForm}
          type={"text"}
          borderRadius={"md"}
          fontSize={"sm"}
          height={"45px"}
          name={"firstName"}
        />
      </Box>

      <Box mb="24px">
        <Text variant="label" mb={"3px"}>
          Last Name
        </Text>
        <Input
          value={data.lastName}
          onChange={changeForm}
          type={"text"}
          borderRadius={"md"}
          fontSize={"sm"}
          height={"45px"}
          name={"lastName"}
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
  )
}

export default FormControlled
