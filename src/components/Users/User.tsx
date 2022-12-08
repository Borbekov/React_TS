import { UserType } from '../../types/type'
import s from './User.module.css'

type PropsType = {
  user: UserType,
  toggleFollowUnfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, toggleFollowUnfollow }) => {
  const onToggleFollowUnfollowClick = () => {
    toggleFollowUnfollow(user.id)
  }

  const actionBtn = user.followed ? (
      <button onClick={onToggleFollowUnfollowClick}>Unfollow</button>
    ) : (
      <button onClick={onToggleFollowUnfollowClick} className={s.followedBtn}>Follow</button>
    )

  return (
    <div className={s.userWrapper}>
      <div className={s.infoBlock}>
        <div className={s.avatar}>
          <img src={user.photos.large} />
        </div>
        <div className={s.userData}>
          <p className={s.userName}>{ user.name }</p>
          {/* <p className={s.userLocation}>
            user.location.city.name, user.location.country.name
          </p> */}
        </div>
      </div>
      <div className={s.actionBlock}>
        { actionBtn }
      </div>
    </div>
  )
}

export default User;