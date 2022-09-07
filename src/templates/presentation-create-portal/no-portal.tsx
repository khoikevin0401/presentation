import React, { useEffect, useState } from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

import "./style.css"

const Table1 = () => {
  const [select, setSelect] = useState("Select")
  const [display, setDisplay] = useState("none")
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (display === "none") {
      setOpacity(0)
    } else {
      setOpacity(1)
    }
  }, [display])

  return (
    <Box w={"92%"} m={"auto"} py={"25px"}>
      <Text fontSize={"25px"} fontWeight={"bold"} textAlign={"center"}>
        Select box in table without use Portal
      </Text>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td w={"260px"} >
                <Box position={"relative"}>
                  <Box
                    border={"1px solid gray"}
                    borderRadius={"5px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    h={"35px"}
                    w={"260px"}
                    p={"8px"}
                    onClick={() => {
                      display === "none"
                        ? setDisplay("block")
                        : setDisplay("none")
                    }}
                    cursor={"pointer"}
                  >
                    <Text>{select}</Text>
                    <ChevronDownIcon />
                  </Box>
                  <Box
                    display={display}
                    position={"absolute"}
                    w={"260px"}
                    border={"1px solid gray"}
                    borderRadius={"5px"}
                    mt={"10px"}
                    py={"8px"}
                    opacity={opacity}
                    transition={"opacity .2s linear"}
                    bgColor={"#f7fafc"}
                  >
                    <ul>
                      <Box
                        onClick={() => {
                          setSelect("Download")
                          setDisplay("none")
                        }}
                      >
                        <li>Download</li>
                      </Box>
                      <Box
                        onClick={() => {
                          setSelect("Create a Copy")
                          setDisplay("none")
                        }}
                      >
                        <li>Create a Copy</li>
                      </Box>
                      <Box
                        onClick={() => {
                          setSelect("Mark as Draft")
                          setDisplay("none")
                        }}
                      >
                        <li>Mark as Draft</li>
                      </Box>
                      <Box
                        onClick={() => {
                          setSelect("Delete")
                          setDisplay("none")
                        }}
                      >
                        <li>Delete</li>
                      </Box>
                    </ul>
                  </Box>
                </Box>
              </Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Table1
