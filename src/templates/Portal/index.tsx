import React, { FC, useState } from "react"
import {
  Box,
  Select,
} from "@chakra-ui/react"
import { RouteComponentProps } from "@reach/router"
import Table1 from "./no-portal"
import Table2 from "./use-portal"


const DemoPortal: FC<RouteComponentProps> = () => {
  const [value, setValue] = useState<string>("1")

  const onChangeValue = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <Box>
      <Box m={"20px"} display={"flex"}>
        <Select
          name="page"
          id="page"
          width={"223px"}
          border={"1px solid #707070"}
          fontFamily={"Helvetica"}
          mb={"16px"}
          bg={"#FFFFFF"}
          onChange={onChangeValue}
        >
          <option value="1">No use ReactPortal</option>
          <option value="2">Use ReactPortal</option>
        </Select>
      </Box>
      <Box>{value === "1" ? <Table1 /> : <Table2 />}</Box>
    </Box>
  )
}

export default DemoPortal
