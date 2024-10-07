import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter-reducer";
import {  loadState, saveState } from "../utils/localStorage";
import { settingsValueReducer } from "./settingsValue-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  settingsValue: settingsValueReducer,
});


export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
    settingsValue: store.getState().settingsValue,
  });
});

type AppRootType = typeof store;
