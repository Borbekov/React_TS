import { combineReducers, createStore } from "redux";
import chatReducer from "./reducers/chat-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: chatReducer,
  usersPage: usersReducer
})

let store = createStore(reducers)

export default store;