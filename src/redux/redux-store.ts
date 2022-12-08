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

let store = createStore(rootReducers, applyMiddleware(thunk))

export default store;