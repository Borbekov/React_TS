import axios from 'axios'

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "62bcdef8-fdea-4d5c-8415-96d0f9220c5b"
  },
  // withCredentials: true
})

export const usersAPI = {
  getUsers(page: number) {
    return instance.get(`users?count=${10}&page=${page}`)
  }
}