import s from './User.module.css'

const User = ({ user, toggleFollowUnfollow }) => {
  const onToggleFollowUnfollowClick = () => {
    toggleFollowUnfollow(user.id)
  }

  const actionBtn = user.followed ? (
      <button onClick={onToggleFollowUnfollowClick}>Unfollow</button>
    ) : (
      <button onClick={onToggleFollowUnfollowClick} class={s.followedBtn}>Follow</button>
    )

  return (
    <div className={s.userWrapper}>
      <div className={s.infoBlock}>
        <div className={s.avatar}>
          <img src={user.avatar} />
        </div>
        <div className={s.userData}>
          <p className={s.userName}>{ user.name }</p>
          <p className={s.userLocation}>
            { user.location.city.name }, { user.location.country.name }
          </p>
        </div>
      </div>
      <div className={s.actionBlock}>
        { actionBtn }
      </div>
    </div>
  )
}

export default User;