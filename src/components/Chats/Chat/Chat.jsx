import { updateMessageTextActionCreator, addMessageActionCreator } from "../../../redux/reducers/chat-reducer";
import style from "./Chat.module.css"
import Message from "./Message/Message";

const Chat = (props) => {

  const message = props.messages.map(m => (
    <div className={!m.income && style.from_me} key={m.id}>
      <Message message={m} />
    </div>
  ))
  
  const msgHandleChange = (e) => {
    let text = e.target.value
    props.updateMessageText(text)
  }

  const handleClick = () => (
    props.addMessage()
  )

  return (
    <div className={style.chat}>
      {message}
      <input
        type="text"
        value={props.newMessageText}
        onChange={msgHandleChange}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  )
}

export default Chat;