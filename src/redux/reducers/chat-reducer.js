const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT"
const ADD_MESSAGE = "ADD_MESSAGE"

const initState = {
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

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT: {
      let newState = {...state}
      newState.newMessageText = action.newMessageText
      return newState
    }
    case ADD_MESSAGE: {
      let newState = {...state}
      newState.messages = [...state.messages]
      const message = {
        id: 5,
        income: false,
        time: "12:08",
        text: newState.newMessageText
      }
      newState.messages.push(message)
      newState.newMessageText = ''
      return newState
    }
    default:
      return state
  }
}

export const updateMessageTextActionCreator = (newMessageText) => (
  {
    type: UPDATE_MESSAGE_TEXT,
    newMessageText
  }
)
export const addMessageActionCreator = () => (
  {
    type: ADD_MESSAGE
  }
)

export default chatReducer;