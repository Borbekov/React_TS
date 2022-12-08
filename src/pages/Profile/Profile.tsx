import { connect, ConnectedProps } from 'react-redux';
import Posts from '../../components/Profile/Posts/Posts';
import { addPost, updatePostText } from '../../redux/reducers/profile-reducer'
import { StoreStateType } from '../../redux/redux-store';
import { ProfilePageType } from '../../types/type';

// type MapStateToPropsType = {
//   profilePage: ProfilePageType
// }

// type MapDispatchToPropsType = {
//   updatePostText: (text: string) => void
//   addPost: () => void
// }

type PropsType = PropsFromRedux

const Profile: React.FC<PropsType> = (props) => {
  return (
    <div>
      <Posts profilePage={props.profilePage} updatePostText={props.updatePostText} addPost={props.addPost} />
    </div>
  )
}

const mapStateToProps = (state: StoreStateType) => {
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

const connector = connect(
  mapStateToProps,
  { updatePostText, addPost }
)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Profile);

// export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StoreStateType>(mapStateToProps, { updatePostText, addPost })(Profile);