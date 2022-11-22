export type FriendType = {
  id: number,
  online: boolean,
  name: string
}

export type MessageType = {
  id: number,
  income: boolean,
  time: string,
  text: string
}

export type PostType = {
  id: number,
  text: string
}

export type UserType = {
  followed: boolean
  id: number
  name: string
  photos: {small: null | string, large: null | string}
  status: null | string
  uniqueUrlName: null | string
}