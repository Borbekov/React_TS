let rerenderTree = () => {}

let state = {
  profilePage: {
    posts: [
      {id: 1, text: "My name is..."},
      {id: 2, text: "...Bekzhan"},
      {id: 3, text: "From Kazakhstan"},
      {id: 4, text: "Uade"},
      {id: 5, text: "Kim bar munda?"},
    ],
    newPostText: ""
  },
  messagesPage: {
    friends: [
      {id: 1, online: true, name: "Aliken Saulet"},
      {id: 2, online: true, name: "Kengesbek Temirlan"},
      {id: 3, online: true, name: "Zhaksybekova Moldir"},
      {id: 4, online: false, name: "Kydyrsha Sanat"},
      {id: 5, online: false, name: "Alexandr Ligay"}
    ],
    messages: [
      {
        id: 1,
        income: true,
        time: "12:08",
        text: "Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?"
      },
      {
        id: 2,
        income: false,
        time: "12:08",
        text: "Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?"
      },
      {
        id: 3,
        income: false,
        time: "12:08",
        text: "Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?"
      },
      {
        id: 4,
        income: true,
        time: "12:08",
        text: "Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?Hello, my friend! How are you?"
      }
    ]
  }
}

export const addPost = () => {
  const post = {
    id: 6,
    text: state.profilePage.newPostText
  }
  state.profilePage.posts.push(post)
  state.profilePage.newPostText = ''
  rerenderTree(state)
}

export const updatePostText = (newPostText) => {
  state.profilePage.newPostText = newPostText
  rerenderTree(state)
}

export const subscribe = (observer) => {
  rerenderTree = observer
}

export default state;