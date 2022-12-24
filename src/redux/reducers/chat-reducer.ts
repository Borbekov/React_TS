import { FriendType, MessageType } from "../../types/type";
import { InferActionsType } from "../redux-store";

const initState = {
  friends: [
    {id: 1, online: true, name: "Aliken Saulet"},
    {id: 2, online: true, name: "Kengesbek Temirlan"},
    {id: 3, online: true, name: "Zhaksybekova Moldir"},
    {id: 4, online: false, name: "Kydyrsha Sanat"},
    {id: 5, online: false, name: "Alexandr Ligay"}
  ] as Array<FriendType>,
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
  ] as Array<MessageType>,
  newMessageText: ""
}

export type InitStateType = typeof initState;

export type ActionType = InferActionsType<typeof actionCreators>

const chatReducer = (state = initState, action: ActionType): InitStateType => {
  switch (action.type) {
    case 'UPDATE_MESSAGE_TEXT':
      return {
        ...state,
        newMessageText: action.newMessageText
      }
    case 'ADD_MESSAGE':
      const message = {
        id: 5,
        income: false,
        time: "12:08",
        text: state.newMessageText
      }
      return {
        ...state,
        messages: [...state.messages, message],
        newMessageText: ''
      }
    default:
      return state
  }
}

export const actionCreators = {
  updateMessageText: (newMessageText: string) => (
    {
      type: 'UPDATE_MESSAGE_TEXT',
      newMessageText
    } as const
  ),
  addMessage: () => (
    {
      type: 'ADD_MESSAGE',
    } as const
  )
}

export default chatReducer;