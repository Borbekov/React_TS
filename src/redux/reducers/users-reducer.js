import { usersAPI } from "../../api"

const SET_USERS = 'SET_USERS'
const TOGGLE_FOLLOW_UNFOLLOW = 'TOGGLE_FOLLOW_UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initState = {
  users: [],
  currentPage: 1,
  totalPages: null
}

const usersReducer = (state = initState, action) => {
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
export const setCurrentPage = (page) => (
  {
    type: SET_CURRENT_PAGE,
    page
  }
)

export const getUsers = (page) => async (dispatch) => {
  const usersResp = await usersAPI.getUsers(page)
  dispatch(setUsers(usersResp.data))
}

export default usersReducer;