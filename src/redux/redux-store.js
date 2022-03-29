import { combineReducers, createStore } from "redux";
import chatReducer from "./reducers/chat-reducer";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: chatReducer
})

let store = createStore(reducers)

export default store;