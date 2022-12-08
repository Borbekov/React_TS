import Post from "./Post/Post"
import AddPost from './AddPost'
import { ProfilePageType } from '../../../types/type'
import React from 'react';

type PropsType = {
  profilePage: ProfilePageType
  updatePostText: (text: string) => void
  addPost: () => void
}

const Posts: React.FC<PropsType> = ({ profilePage, updatePostText, addPost }) => {
  return (
    <div>
      <AddPost
        newPostText={profilePage.newPostText}
        updatePostText={updatePostText}
        addPost={addPost} 
      />
      {
        profilePage.posts.map(post => <Post post={post} key={post.id} />)
      }
    </div>
  )
}


export default Posts;