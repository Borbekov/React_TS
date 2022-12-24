import { useDispatch, useSelector } from 'react-redux';
import Posts from '../../components/Profile/Posts/Posts';
import { actionCreators } from '../../redux/reducers/profile-reducer'
import { getProfilePage } from '../../selectors';


const Profile = () => {
  const profilePage = useSelector(getProfilePage)
  const dispatch = useDispatch()
  return (
    <div>
      <Posts
        profilePage={profilePage}
        updatePostText={(text) => dispatch(actionCreators.updatePostText(text))}
        addPost={() => dispatch(actionCreators.addPost())} 
      />
    </div>
  )
}

export default Profile


// !!! OLD CODE !!!
//
// const connector = connect(
//   mapStateToProps,
//   { updatePostText, addPost }
// )
// type PropsFromRedux = ConnectedProps<typeof connector>

// export default connector(Profile);
