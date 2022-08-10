import React, { useReducer } from "react";
import { RouteComponentProps } from "@reach/router"
import { Button } from "@chakra-ui/react";

enum CountActionKind {
  TANG = "TANG",
  GIAM = "GIAM",
  XOA_HET_DU_LIEU = "XOA_HET_DU_LIEU",
}

// An interface for our actions
interface CountAction {
  type: CountActionKind;
  payload: number;
}

interface CountState {
  count: number;
}

function counterReducer(state: CountState, action: CountAction)  {
//   const { type, payload } = action;
  switch (action.type) {
    case CountActionKind.TANG:
     
      return { ...state,
       count: state.count + action.payload,}
    case CountActionKind.GIAM:
      return{ ...state,
        count: state.count - action.payload,}
    case CountActionKind.XOA_HET_DU_LIEU:
      return { ...state,
        count: action.payload}
    default:
      return state;
  }
};

const CounterUseReducer: React.FC<RouteComponentProps> = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    return (
      <div>
        <p>Count: {state.count}</p>
        {/* Calling our actions on button click */}
        <Button
          onClick={() => dispatch({ type: CountActionKind.TANG, payload: 5 })}
        >
          TANG
        </Button>
        <Button onClick={() => dispatch({ type: CountActionKind.GIAM, payload: 5 })}>GIAM</Button>

        <Button onClick={() => dispatch({ type: CountActionKind.XOA_HET_DU_LIEU, payload: 0})}>XOA HET DU LIEU</Button>
      </div>
    );
};

export default CounterUseReducer;
/*

ACTION 'ADDD-NEW-ITEM' 

view : NHAN LEN 1 BUTTON dispatch('ADD-NEW-BUTOTN')

reducer (STATE, ACTION) => {
switch(action) {{
    case 'ADD_NEW_ITEM':
        state = state +1
}}
}
*/
