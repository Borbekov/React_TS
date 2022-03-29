import { connect } from 'react-redux';
import Posts from '../../components/Profile/Posts/Posts';
import { addPostActionCreator, updatePostTextActionCreator } from '../../redux/reducers/profile-reducer'

const Profile = (props) => {
  console.log("OPPP ", props);
  return (
    <div>
      {/* <Posts
        state={store.getState()}
        dispatch={store.dispatch}
      /> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPosition: () => {
      dispatch(addPostActionCreator())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);