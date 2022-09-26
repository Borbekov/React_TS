import { connect } from "react-redux";
import Users from "../../components/Users";
import { setUsersAC, toggleFollowUnfollowAC } from "../../redux/reducers/users-reducer";

const mapStateToProps = state => (
  {
    users: state.usersPage.users
  }
)

const mapDispatchToProps = dispatch => (
  {
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    toggleFollowUnfollow: (userId) => {
      dispatch(toggleFollowUnfollowAC(userId))
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Users)