export enum TYPE_ACTION {
  DO_TODO = "DO_TODO",
  UNDO_TODO = "UNDO_TODO",
  ADD_TODO = "ADD_TODO"
}

export interface ToDoState {
  id: string
  task: string
  complete: boolean
}

export interface ToDoAction {
  type: TYPE_ACTION
  payload: string | ToDoState
}

export const initialToDos : ToDoState[] = [
  {
    id: "abcde",
    task: "Learn React",
    complete: true,
  },
  {
    id: "xyzmn",
    task: "Learn Firebase",
    complete: false,
  },
]

export const makeId = (length: number) => {
  let result = ""
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
