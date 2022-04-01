const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"
const ADD_POST = "ADD_POST"

const initState = {
  posts: [
    {id: 1, text: "My name is..."},
    {id: 2, text: "...Bekzhan"},
    {id: 3, text: "From Kazakhstan"},
    {id: 4, text: "Uade"},
    {id: 5, text: "Kim bar munda?"},
  ],
  newPostText: ""
}

const profileReducer = (state = initState, action) => {
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

export const updatePostTextActionCreator = (newPostText) => (
  {
    type: UPDATE_POST_TEXT,
    newPostText
  }
)
export const addPostActionCreator = () => (
  {
    type: ADD_POST
  }
)

export default profileReducer;