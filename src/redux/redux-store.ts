import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import chatReducer from "./reducers/chat-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";

let rootReducers = combineReducers({
  profilePage: profileReducer,
  messagePage: chatReducer,
  usersPage: usersReducer
})

export type StoreStateType = ReturnType<typeof rootReducers>
type ActionsReturnType<T> = T extends {[key: string]: infer value} ? value : any
export type InferActionsType<T extends {[key: string]:([...args]: any) => any}> = ReturnType<ActionsReturnType<T>>

let store = createStore(rootReducers, applyMiddleware(thunk))

export default store;