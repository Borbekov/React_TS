import { PostType } from "../../types/type"

const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"
const ADD_POST = "ADD_POST"

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

const profileReducer = (state = initState, action: any): InitStateType => {  
  switch (action.type) {
    case UPDATE_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newPostText
      }
    }
    case ADD_POST: {
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

export type UpdatePostTextType = {
  type: typeof UPDATE_POST_TEXT,
  newPostText: string
}
export type AddPostTextType = {
  type: typeof ADD_POST
}

export const updatePostText = (newPostText: string): UpdatePostTextType => (
  {
    type: UPDATE_POST_TEXT,
    newPostText
  }
)
export const addPost = (): AddPostTextType => (
  {
    type: ADD_POST
  }
)

export default profileReducer;