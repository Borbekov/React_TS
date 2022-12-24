import { InferActionsType, StoreStateType } from './../redux-store';
import { CodesEnum, usersAPI } from "../../api"
import { UserType } from "../../types/type"
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

const initState = {
  users: [] as Array<UserType>,
  currentPage: 1,
  totalPages: null as number | null
}

export type InitStatType = typeof initState

// export type ActionType = SetUsersType | ToggleFollowUnfollowType | SetCurrentPageType
export type ActionType = InferActionsType<typeof actionCreators>

const usersReducer = (state = initState, action: ActionType): InitStatType => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.users.items,
        totalPages: Math.ceil(action.users.totalCount / 10)
      }
    case 'TOGGLE_FOLLOW_UNFOLLOW':
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
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state
  }
}

export type UserRespType = {
  items: Array<UserType>,
  totalCount: number
}

export const actionCreators = {
  setUsers: (users: UserRespType) => (
    {
      type: 'SET_USERS',
      users
    } as const
  ),
  toggleFollowUnfollow: (userId: number) => (
    {
      type: 'TOGGLE_FOLLOW_UNFOLLOW',
      userId
    } as const
  ),
  setCurrentPage: (page: number) => (
    {
      type: 'SET_CURRENT_PAGE',
      page
    } as const
  )
}


type GetStateType = () => StoreStateType
type DispatchType = Dispatch<ActionType>

// export const getUsers = (page: number) => async (dispatch: DispatchType, getState: GetStateType) => {
export const fetchUsers = (page: number): ThunkAction<Promise<void>, StoreStateType, unknown, ActionType> => async (dispatch) => {
  const usersResp = await usersAPI.getUsers(page)
  dispatch(actionCreators.setUsers(usersResp.data))
}

export default usersReducer;