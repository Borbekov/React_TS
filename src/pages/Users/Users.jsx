import { useEffect } from "react";
import { connect } from "react-redux";
import User from "../../components/Users/User";
import Paginate from "../../components/Paginate";
import { setUsers, toggleFollowUnfollow, setCurrentPage, getUsers } from "../../redux/reducers/users-reducer";

const Users = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage)
  }, [props.currentPage])

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
      
      <Paginate
        pageRangeDisplayed={3}
        pageCount={props.totalPages}
        setCurrentPage={props.setCurrentPage}
      />
    </div>
  )
}

const mapStateToProps = state => (
  {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalPages: state.usersPage.totalPages
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

export default connect(mapStateToProps, { setUsers, toggleFollowUnfollow, setCurrentPage, getUsers })(Users)