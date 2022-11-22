import { FriendType } from '../../../../types/type'
import style from './Friend.module.css'

type PropsType = {
  friend: FriendType
}

const Friend: React.FC<PropsType> = ({ friend }) => {
  return (
    <div className={style.friend_wrapper} key={friend.id}>
      <div className={style.avatar}>
        <img src="https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png" alt="avatar" />
        <div className={friend.online ? style.online_bullet : style.offline_bullet}></div>
      </div>
      <p className={style.name}>{friend.name}</p>
    </div>
  )
}

export default Friend;