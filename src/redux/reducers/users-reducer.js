const SET_USERS = 'SET_USERS'
const TOGGLE_FOLLOW_UNFOLLOW = 'TOGGLE_FOLLOW_UNFOLLOW'

const initState = {
  users: [
    {
      id: 1,
      avatar: 'https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png',
      name: 'Bekzhan Borbekov',
      location: {
        city: {
          id: 1,
          name: 'Almaty'
        },
        country: {
          id: 1,
          name: 'KZ'
        }
      },
      followed: false,
      online: true
    },
    {
      id: 2,
      avatar: 'https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png',
      name: 'Bekzhan Borbekov',
      location: {
        city: {
          id: 1,
          name: 'Almaty'
        },
        country: {
          id: 1,
          name: 'KZ'
        }
      },
      followed: true,
      online: true
    }
  ]
}

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    case TOGGLE_FOLLOW_UNFOLLOW:
        return {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return {
                ...u,
                followed: !u.followed
              }
            }
            return u
          })
        }
    default:
      return state
  }
}

export const setUsers = (users) => (
  {
    type: SET_USERS,
    users
  }
)
export const toggleFollowUnfollow = (userId) => (
  {
    type: TOGGLE_FOLLOW_UNFOLLOW,
    userId
  }
)

export default usersReducer;