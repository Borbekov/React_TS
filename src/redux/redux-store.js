import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import chatReducer from "./reducers/chat-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: chatReducer,
  usersPage: usersReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store;