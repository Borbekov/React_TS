const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT"
const ADD_MESSAGE = "ADD_MESSAGE"

const initState = {
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

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText
      return state
    case ADD_MESSAGE:
      const message = {
        id: 5,
        income: false,
        time: "12:08",
        text: state.newMessageText
      }
      state.messages.push(message)
      state.newMessageText = ''
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