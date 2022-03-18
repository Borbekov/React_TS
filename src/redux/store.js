const ADD_POST = "ADD_POST"
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"

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
      ]
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
    if (action.type === ADD_POST) {
      const post = {
        id: 6,
        text: this._state.profilePage.newPostText
      }
      this._state.profilePage.posts.push(post)
      this._state.profilePage.newPostText = ''
      this._subscriber(this._state)
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.newPostText = action.newPostText
      this._subscriber(this._state)
    }
  }
}

export const addPostActionCreator = () => (
  {
    type: ADD_POST
  }
)
export const updatePostTextActionCreator = (newPostText) => (
  {
    type: UPDATE_POST_TEXT,
    newPostText
  }
)

export default store;