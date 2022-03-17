import style from "./Chat.module.css"
import Message from "./Message/Message";

const Chat = ({ messages }) => {

  const message = messages.map(m => (
    <div className={m.income && style.from_me}>
      <Message message={m} />
    </div>
  ))

  return (
    <div className={style.chat}>
      {message}
    </div>
  )
}

export default Chat;