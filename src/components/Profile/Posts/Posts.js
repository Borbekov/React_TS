import styles from './Posts.module.css'
import Post from "./Post/Post"
import AddPost from './AddPost'

const Posts = ({ state, addPost, updatePostText }) => {

  const post = state.posts.map(post => (
    <Post post={post} />
  ))

  return (
    <div>
      <AddPost state={state} addPost={addPost} updatePostText={updatePostText} />
      {post}
    </div>
  )
}

export default Posts;