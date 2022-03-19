const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"
const ADD_POST = "ADD_POST"

const postReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POST_TEXT:
      state.newPostText = action.newPostText
      return state
    case ADD_POST:
      const post = {
        id: 6,
        text: state.newPostText
      }
      state.posts.push(post)
      state.newPostText = ''
      return state
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

export default postReducer;