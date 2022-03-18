import styles from './Posts.module.css'
import Post from "./Post/Post"
import AddPost from './AddPost'

const Posts = ({ state, dispatch }) => {

  const post = state.posts.map(post => (
    <Post post={post} />
  ))

  return (
    <div>
      <AddPost state={state} dispatch={dispatch} />
      {post}
    </div>
  )
}

export default Posts;