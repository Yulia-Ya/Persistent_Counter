const initialState = {
    value: 0
  };
  type initialStateType = typeof initialState;
  export const counterhjReducer = (
    state: initialStateType = initialState,
    action: ActionType
  ): initialStateType => {
    switch (action.type) {
      case "INC-COUNTER": {
        return { ...state, value: state.value + 1 };
      }
      case "RESET-COUNTER" :{
          return { ...state, value: state.value = 0};
      }
      default:
      return state;
    }
    
  };
  
  export const incCounter = () => ({ type: "INC-COUNTER" } as const);
  export const resetCounter = () => ({ type: "RESET-COUNTER" } as const);
  
  export type ActionType = ReturnType<typeof incCounter> | ReturnType<typeof resetCounter>;;
  