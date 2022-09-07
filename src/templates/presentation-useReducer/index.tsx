import React, { FC, useReducer, useRef, useState } from "react"
import {
  Box,
  Button,
  Checkbox,
  Input,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react"

import { Wrapper } from "@Components/common/ui"
import { initialToDos, TYPE_ACTION, ToDoState, makeId } from "./useReducer.type"
import { todoReducer } from "./example-reducer"

const PresentationUseReducer: FC = () => {
  const [toDos, dispatch] = useReducer(todoReducer, initialToDos)

  const refInput = useRef(null)

  const [input, setInput] = useState("")

  const handleChange = (todo: ToDoState) => {
    dispatch({
      type: todo.complete ? TYPE_ACTION.UNDO_TODO : TYPE_ACTION.DO_TODO,
      payload: todo.id,
    })
  }

  const addNewToDo = () => {
    const newTodo: ToDoState = {
      id: makeId(5),
      task: input,
      complete: false,
    }
    dispatch({
      type: TYPE_ACTION.ADD_TODO,
      payload: newTodo,
    });
    (refInput.current as any).focus()
    setInput("")
  }

  return (
    <Wrapper>
      <Box w={"400px"}>
        <Box display={"flex"} mb={"20px"}>
          <Input
            type={"text"}
            borderRadius={"md"}
            fontSize={"sm"}
            height={"40px"}
            ref={refInput}
            value={input}
            onChange={e => setInput((e.target as any).value)}
          />
          <Button
            ml={"15px"}
            rounded={"md"}
            border={"1px solid #8d81e8"}
            bgColor={"white"}
            color={"#8d81e8"}
            onClick={() => addNewToDo()}
          >
            Add
          </Button>
        </Box>

        <OrderedList>
          {toDos.length > 0 &&
            toDos.map((todo: ToDoState, index: any) => (
              <ListItem py={"5px"} key={index}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text mr={"15px"}> {todo.task}</Text>
                  <Checkbox
                    colorScheme="blue"
                    rounded={"full"}
                    isChecked={todo.complete}
                    onChange={() => handleChange(todo)}
                  />
                </Box>
              </ListItem>
            ))}
        </OrderedList>
      </Box>
    </Wrapper>
  )
}

export default PresentationUseReducer
