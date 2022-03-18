import Posts from '../../components/Profile/Posts/Posts';
import styles from './Profile.module.css'

const Profile = ({ state, dispatch }) => {
  return (
    <div>
      <Posts
        state={state}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Profile;