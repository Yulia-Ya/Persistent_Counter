const initialState = {
    startValue: 0,
    maxValue: 0
  };

  type initialStateType = typeof initialState;

  export const settingsValueReducer = (
    state: initialStateType = initialState,
    action: ActionType
  ): initialStateType => {
    switch (action.type) {
      case  "SET-START": {
        return { ...state, startValue: action.number };
      }
      case  "SET-MAX": {
        return { ...state, maxValue: action.number };
      }
      
      default:
      return state;
    }
    
  };
  
  export const setStartValueAc = (number: number) => ({ type: "SET-START", number } as const);
  export const setMaxValueAc = (number: number) => ({ type: "SET-MAX", number } as const);

  type SetStartValueType = ReturnType<typeof setStartValueAc> |ReturnType<typeof setMaxValueAc> 
 
   type ActionType = SetStartValueType
  