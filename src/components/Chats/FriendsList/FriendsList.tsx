import { FriendType } from '../../../types/type';
import Friend from './Friend/Friend';
import style from './FriendsList.module.css'

type PropsType = {
  friends: Array<FriendType>
}

const FriendsList: React.FC<PropsType> = ({ friends }) => {

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