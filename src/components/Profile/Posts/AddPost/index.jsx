import React from 'react'
import { addPostActionCreator, updatePostTextActionCreator } from '../../../../redux/reducers/post-reducer'
import style from './AddPost.module.css'

const AddPost = ({ state, dispatch }) => {

  const input = React.createRef()

  const inputHandler = () => {
    let value = input.current.value
    // updatePostText(value)
    dispatch(updatePostTextActionCreator(value))
  }

  const addPostHandler = () => {
    // addPost()
    dispatch(addPostActionCreator())
  }

  return (
    <div className={style.wrapper}>
      <input
        ref={input}
        type="text"
        value={state.newPostText}
        onChange={inputHandler} 
      />
      <button onClick={addPostHandler}>Add Post</button>
    </div>
  )
}

export default AddPost;