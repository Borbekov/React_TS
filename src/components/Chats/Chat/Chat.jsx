import { updateMessageTextActionCreator, addMessageActionCreator } from "../../../redux/reducers/chat-reducer";
import style from "./Chat.module.css"
import Message from "./Message/Message";

const Chat = ({ state, dispatch }) => {

  const message = state.messages.map(m => (
    <div className={!m.income && style.from_me}>
      <Message message={m} />
    </div>
  ))
  
  const msgHandleChange = (e) => {
    let text = e.target.value
    dispatch(updateMessageTextActionCreator(text))
  }

  const handleClick = () => (
    dispatch(addMessageActionCreator())
  )

  return (
    <div className={style.chat}>
      {message}
      <input
        type="text"
        value={state.newMessageText}
        onChange={msgHandleChange}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  )
}

export default Chat;