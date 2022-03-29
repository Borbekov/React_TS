import Friend from './Friend/Friend';
import style from './FriendsList.module.css'

const FriendsList = ({ friends }) => {

  const friend = friends.map(f => (
    <Friend friend={f} key={f.id} />
  ))

  return (
    <div className={style.list_wrapper}>
      {friend}
    </div>
  )
}

export default FriendsList;