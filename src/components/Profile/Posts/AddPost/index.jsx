import React from 'react'
import style from './AddPost.module.css'

const AddPost = ({ state, updatePostText, addPost }) => {

  const input = React.createRef()

  const inputHandler = () => {
    let value = input.current.value
    updatePostText(value)
  }

  const addPostHandler = () => {
    addPost()
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