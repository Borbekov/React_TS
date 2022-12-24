import { StoreStateType } from './../redux/redux-store';

export const getUsers = (state: StoreStateType) => state.usersPage.users
export const getCurrentPage = (state: StoreStateType) => state.usersPage.currentPage
export const getTotalPages = (state: StoreStateType) => state.usersPage.totalPages

export const getFriends = (state: StoreStateType) => state.messagePage.friends
export const getMessages = (state: StoreStateType) => state.messagePage.messages
export const getNewMessageText = (state: StoreStateType) => state.messagePage.newMessageText

export const getProfilePage = (state: StoreStateType) => state.profilePage