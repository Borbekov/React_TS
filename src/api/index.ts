import axios, { AxiosResponse } from 'axios'
import { UserType } from '../types/type'

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "62bcdef8-fdea-4d5c-8415-96d0f9220c5b"
  },
  // withCredentials: true
})

export enum CodesEnum {
  Success = 0,
  Error = 1
}

type GetUsersType = {
  error: null | string,
  items: Array<UserType>,
  totalCount: number
}

export const usersAPI = {
  getUsers(page: number) {
    return instance.get<GetUsersType>(`users?count=${10}&page=${page}`)
  }
}

usersAPI.getUsers(1).then((response: AxiosResponse<any>) => response.data)