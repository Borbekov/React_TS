import Posts from '../../components/Profile/Posts/Posts';
import styles from './Profile.module.css'

const Profile = ({ store }) => {
  return (
    <div>
      <Posts
        state={store.getState()}
        dispatch={store.dispatch}
      />
    </div>
  )
}

export default Profile;