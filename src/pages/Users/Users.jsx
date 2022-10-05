import { connect } from "react-redux";
import User from "../../components/Users/User";
import { setUsers, toggleFollowUnfollow } from "../../redux/reducers/users-reducer";

const Users = (props) => {
  return (
    <div>
      {
        props.users.map(u => (
          <User
            user={u}
            toggleFollowUnfollow={props.toggleFollowUnfollow}
            key={u.id}
          />
        ))
      }
    </div>
  )
}

const mapStateToProps = state => (
  {
    users: state.usersPage.users
  }
)

// const mapDispatchToProps = dispatch => (
//   {
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     toggleFollowUnfollow: (userId) => {
//       dispatch(toggleFollowUnfollowAC(userId))
//     }
//   }
// )

export default connect(mapStateToProps, { setUsers, toggleFollowUnfollow })(Users)