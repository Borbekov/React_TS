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
  photos: {small: undefined | string, large: undefined | string}
  status: null | string
  uniqueUrlName: null | string
}

export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}