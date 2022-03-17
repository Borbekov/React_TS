import Posts from '../../components/Profile/Posts/Posts';
import styles from './Profile.module.css'

const Profile = ({ state, addPost, updatePostText }) => {
  return (
    <div>
      <Posts
        state={state}
        addPost={addPost} 
        updatePostText={updatePostText}
      />
    </div>
  )
}

export default Profile;