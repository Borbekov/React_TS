import { useEffect } from "react";
import { connect } from "react-redux";
import User from "../../components/Users/User";
import Paginate from "../../components/Paginate";
import { toggleFollowUnfollow, setCurrentPage, getUsers } from "../../redux/reducers/users-reducer";
import { UserType } from "../../types/type";
import { StoreStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
  users: Array<UserType>,
  currentPage: number,
  totalPages: number | null
}

type MapDispatchToPropsType = {
  toggleFollowUnfollow: (userId: number) => void,
  setCurrentPage: (page: number) => void
  getUsers: (page: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const Users: React.FC<PropsType> = (props) => {
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

const mapStateToProps = (state: StoreStateType) => (
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

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StoreStateType>(mapStateToProps, { toggleFollowUnfollow, setCurrentPage, getUsers })(Users)