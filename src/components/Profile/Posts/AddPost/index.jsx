import React from 'react'
import style from './AddPost.module.css'

const AddPost = ({ newPostText, inputHandler, addPost }) => {

  const input = React.createRef()

  const inputHandler1 = () => {
    let value = input.current.value
    inputHandler(value)
  }

  const addPostHandler = () => {
    addPost()
  }

  return (
    <div className={style.wrapper}>
      <input
        ref={input}
        type="text"
        value={newPostText}
        onChange={inputHandler1} 
      />
      <button onClick={addPostHandler}>Add Post</button>
    </div>
  )
}

export default AddPost;