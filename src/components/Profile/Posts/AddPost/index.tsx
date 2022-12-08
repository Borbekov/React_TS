import React, { ChangeEvent } from 'react'
import style from './AddPost.module.css'

type PropsType = {
  newPostText: string,
  updatePostText: (text: string) => void,
  addPost: () => void
}

const AddPost: React.FC<PropsType> = ({ newPostText, updatePostText, addPost }) => {

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    updatePostText(value)
  }

  const addPostHandler = () => {
    addPost()
  }

  return (
    <div className={style.wrapper}>
      <input
        type="text"
        value={newPostText}
        onChange={inputHandler} 
      />
      <button onClick={addPostHandler}>Add Post</button>
    </div>
  )
}

export default AddPost;