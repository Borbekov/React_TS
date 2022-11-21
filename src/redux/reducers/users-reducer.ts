import { usersAPI } from "../../api"

const SET_USERS = 'SET_USERS'
const TOGGLE_FOLLOW_UNFOLLOW = 'TOGGLE_FOLLOW_UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export type UserType = {
  followed: boolean
  id: number
  name: string
  photos: {small: null | string, large: null | string}
  status: null | string
  uniqueUrlName: null | string
}

const initState = {
  users: [] as Array<UserType>,
  currentPage: 1,
  totalPages: null as number | null
}

export type InitStatType = typeof initState

const usersReducer = (state = initState, action: any): InitStatType => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users.items,
        totalPages: Math.ceil(action.users.totalCount / 10)
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state
  }
}

export type SetUsersType = {
  type: typeof SET_USERS,
  users: Array<UserType>
}
export type ToggleFollowUnfollowType = {
  type: typeof TOGGLE_FOLLOW_UNFOLLOW,
  userId: number
}
export type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE,
  page: number
}

export const setUsers = (users: Array<UserType>): SetUsersType => (
  {
    type: SET_USERS,
    users
  }
)
export const toggleFollowUnfollow = (userId: number): ToggleFollowUnfollowType => (
  {
    type: TOGGLE_FOLLOW_UNFOLLOW,
    userId
  }
)
export const setCurrentPage = (page: number): SetCurrentPageType => (
  {
    type: SET_CURRENT_PAGE,
    page
  }
)

export const getUsers = (page: number) => async (dispatch: any) => {
  const usersResp = await usersAPI.getUsers(page)
  dispatch(setUsers(usersResp.data))
}

export default usersReducer;