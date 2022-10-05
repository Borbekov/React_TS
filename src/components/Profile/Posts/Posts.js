import styles from './Posts.module.css'
import Post from "./Post/Post"
import AddPost from './AddPost'

const Posts = ({ props }) => {
  const post = props.profilePage.posts.map(post => (
    <Post post={post} key={post.id} />
  ))

  return (
    <div>
      <AddPost newPostText={props.profilePage.newPostText} inputHandler={props.updatePostText} addPost={props.addPost} />
      {post}
    </div>
  )
}

export default Posts;