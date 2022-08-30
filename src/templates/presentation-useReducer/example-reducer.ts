import { ToDoAction, ToDoState, TYPE_ACTION } from "./useReducer.type"

export const todoReducer = (state: ToDoState[], action: ToDoAction) => {
  switch (action.type) {
    case TYPE_ACTION.DO_TODO:
      return state.map((todo: ToDoState) => {
        if (todo.id === action.payload) {
          return { ...todo, complete: true }
        } else {
          return todo
        }
      })
    case TYPE_ACTION.UNDO_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, complete: false }
        } else {
          return todo
        }
      })
    case TYPE_ACTION.ADD_TODO:
      const newToDos = [...state]
      newToDos.push(action.payload as ToDoState)
      return newToDos
    default:
      return state
  }
}
