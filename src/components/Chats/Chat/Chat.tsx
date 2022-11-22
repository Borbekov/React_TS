import { ChangeEvent } from "react";
import { MessageType } from "../../../types/type";
import style from "./Chat.module.css"
import Message from "./Message/Message";

type PropTypes = {
  messages: Array<MessageType>,
  newMessageText: string,
  updateMessageText: (text: string) => void,
  addMessage: () => void
}

const Chat: React.FC<PropTypes> = (props) => {

  const message = props.messages.map(m => (
    <div className={!m.income && style.from_me} key={m.id}>
      <Message message={m} />
    </div>
  ))
  
  const msgHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value
    props.updateMessageText(text)
  }

  const handleClick = () => (
    props.addMessage()
  )

  return (
    <div className={style.chat}>
      { message }
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