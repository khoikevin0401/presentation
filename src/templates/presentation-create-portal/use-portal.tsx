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
import { createPortal } from "react-dom"

import "./style.css"

const Portal = ({ children }: any) => {
  const mount = document.getElementById("___gatsby")
  const element = document.createElement("div")

  // create portal
  useEffect((): any => {
    // create div
    mount?.appendChild(element)

    // remove div
    return () => mount?.removeChild(element)
  }, [element, mount])
  return createPortal(children, element)
}

const Table2 = () => {
  const [select, setSelect] = useState("Select")
  const [display, setDisplay] = useState("none")
  const [opacity, setOpacity] = useState(0)
  const [select1, setSelect1] = useState("Select")
  const [display1, setDisplay1] = useState("none")
  const [opacity1, setOpacity1] = useState(0)

  useEffect(() => {
    display === "none" ? setOpacity(0) : setOpacity(1)
  }, [display])

  useEffect(() => {
    display1 === "none" ? setOpacity1(0) : setOpacity1(1)
  }, [display1])

  return (
    <Box w={"92%"} m={"auto"} py={"25px"}>
      <Text fontSize={"25px"} fontWeight={"bold"} textAlign={"center"}>
        Select box in table use Portal
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
              <Td w={"260px"}>
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
                      display1 === "none"
                        ? setDisplay1("block")
                        : setDisplay1("none")
                    }}
                    cursor={"pointer"}
                  >
                    <Text>{select1}</Text>
                    <ChevronDownIcon />
                  </Box>
                  <Portal>
                    <Box
                      display={display1}
                      position={"absolute"}
                      top={"310px"}
                      left={"506px"}
                      w={"260px"}
                      border={"1px solid gray"}
                      borderRadius={"5px"}
                      py={"8px"}
                      opacity={opacity1}
                      transition={"opacity .5s linear"}
                      bgColor={"#f7fafc"}
                    >
                      <ul>
                        <Box
                          onClick={() => {
                            setSelect1("Download")
                            setDisplay1("none")
                          }}
                        >
                          <li>Download</li>
                        </Box>
                        <Box
                          onClick={() => {
                            setSelect1("Create a Copy")
                            setDisplay1("none")
                          }}
                        >
                          <li>Create a Copy</li>
                        </Box>
                        <Box
                          onClick={() => {
                            setSelect1("Mark as Draft")
                            setDisplay1("none")
                          }}
                        >
                          <li>Mark as Draft</li>
                        </Box>
                        <Box
                          onClick={() => {
                            setSelect1("Delete")
                            setDisplay1("none")
                          }}
                        >
                          <li>Delete</li>
                        </Box>
                      </ul>
                    </Box>
                  </Portal>
                </Box>
              </Td>
            </Tr>
            <Tr>
              <Td w={"260px"}>
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
                  <Portal>
                    <Box
                      display={display}
                      position={"absolute"}
                      top={"380px"}
                      left={"62px"}
                      w={"260px"}
                      border={"1px solid gray"}
                      borderRadius={"5px"}
                      py={"8px"}
                      opacity={opacity}
                      transition={"opacity .5s linear"}
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
                  </Portal>
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

export default Table2
