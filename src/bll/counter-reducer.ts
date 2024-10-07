const initialState = {
  value: 0
};
type initialStateType = typeof initialState;
export const counterReducer = (
  state: initialStateType = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case "INC-COUNTER": {
      return { ...state, value: state.value + 1 };
    }
    case "RESET-COUNTER" :{
        return { ...state, value: 0 };
    }
    case "CHANGE-TO-START" :{
        return { ...state, value: action.startValue };
    }
    default:
    return state;
  }
  
};

export const incCounter = () => ({ type: "INC-COUNTER" } as const);
export const resetCounter = () => ({ type: "RESET-COUNTER" } as const);
export const changeToStartValue = (startValue: number) => ({ type: "CHANGE-TO-START", startValue } as const);

export type ActionType = ReturnType<typeof incCounter> | ReturnType<typeof resetCounter> |  ReturnType<typeof changeToStartValue>;;
