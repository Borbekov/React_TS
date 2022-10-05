import { connect } from 'react-redux';
import Posts from '../../components/Profile/Posts/Posts';
import { addPost, updatePostText } from '../../redux/reducers/profile-reducer'

const Profile = (props) => {
  return (
    <div>
      <Posts props={props} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     inputHandler: (value) => {
//       dispatch(updatePostTextActionCreator(value))
//     },
//     addPost: () => {
//       dispatch(addPostActionCreator())
//     }
//   }
// }

export default connect(mapStateToProps, { updatePostText, addPost })(Profile);