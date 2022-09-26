import User from "./User";

const Users = (props) => {
  const users = props.users.map(u => (
    <User
      user={u}
      toggleFollowUnfollow={props.toggleFollowUnfollow}
      key={u.id}
    />
  ))

  return (
    <div>
      { users }
    </div>
  )
}

export default Users;