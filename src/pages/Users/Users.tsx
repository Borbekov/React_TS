import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../components/Users/User";
import Paginate from "../../components/Paginate";
import { actionCreators, fetchUsers } from "../../redux/reducers/users-reducer";
import { getCurrentPage, getTotalPages, getUsers } from "../../selectors";


const Users = () => {
  const users = useSelector(getUsers)
  const currentPage = useSelector(getCurrentPage)
  const totalPages = useSelector(getTotalPages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers(currentPage))
  }, [currentPage])

  return (
    <div>
      {
        users.map(u => (
          <User
            user={u}
            toggleFollowUnfollow={dispatch(actionCreators.toggleFollowUnfollow)}
            key={u.id}
          />
        ))
      }
      
      <Paginate
        pageRangeDisplayed={3}
        pageCount={totalPages}
        setCurrentPage={(page) => dispatch(actionCreators.setCurrentPage(page))}
      />
    </div>
  )
}

export default Users


// !!! OLD CODE !!!
//
// export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StoreStateType>(mapStateToProps, { toggleFollowUnfollow, setCurrentPage, getUsers })(Users)