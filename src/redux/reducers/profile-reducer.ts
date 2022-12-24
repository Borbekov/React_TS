import { PostType } from "../../types/type"
import { InferActionsType } from "../redux-store"

const initState = {
  posts: [
    {id: 1, text: "My name is..."},
    {id: 2, text: "...Bekzhan"},
    {id: 3, text: "From Kazakhstan"},
    {id: 4, text: "Uade"},
    {id: 5, text: "Kim bar munda?"},
  ] as Array<PostType>,
  newPostText: ""
}

export type InitStateType = typeof initState

export type ActionType = InferActionsType<typeof actionCreators>

const profileReducer = (state = initState, action: ActionType): InitStateType => {  
  switch (action.type) {
    case 'UPDATE_POST_TEXT': {
      return {
        ...state,
        newPostText: action.newPostText
      }
    }
    case 'ADD_POST': {
      const post = {
        id: 6,
        text: state.newPostText
      }
      return {
        ...state,
        posts: [...state.posts, post],
        newPostText: ''
      }
    }
    default:
      return state
  }
}

export const actionCreators = {
  updatePostText: (newPostText: string) => (
    {
      type: 'UPDATE_POST_TEXT',
      newPostText
    } as const
  ),
  addPost: () => (
    {
      type: 'ADD_POST'
    } as const
  )
}

export default profileReducer;