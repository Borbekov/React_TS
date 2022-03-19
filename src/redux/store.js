import chatReducer from "./reducers/chat-reducer"
import postReducer from "./reducers/post-reducer"

let store = {

  _state: {
    profilePage: {
      posts: [
        {id: 1, text: "My name is..."},
        {id: 2, text: "...Bekzhan"},
        {id: 3, text: "From Kazakhstan"},
        {id: 4, text: "Uade"},
        {id: 5, text: "Kim bar munda?"},
      ],
      newPostText: ""
    },
    messagesPage: {
      friends: [
        {id: 1, online: true, name: "Aliken Saulet"},
        {id: 2, online: true, name: "Kengesbek Temirlan"},
        {id: 3, online: true, name: "Zhaksybekova Moldir"},
        {id: 4, online: false, name: "Kydyrsha Sanat"},
        {id: 5, online: false, name: "Alexandr Ligay"}
      ],
      messages: [
        {
          id: 1,
          income: true,
          time: "12:08",
          text: "Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?"
        },
        {
          id: 2,
          income: false,
          time: "12:08",
          text: "Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?"
        },
        {
          id: 3,
          income: false,
          time: "12:08",
          text: "Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?"
        },
        {
          id: 4,
          income: true,
          time: "12:08",
          text: "Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?"
        }
      ],
      newMessageText: ""
    }
  },
  _subscriber() {
    console.log("There is no subscriber")
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._subscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = postReducer(this._state.profilePage, action)
    this._state.messagesPage = chatReducer(this._state.messagesPage, action)

    this._subscriber(this._state)
  }
}

export default store;