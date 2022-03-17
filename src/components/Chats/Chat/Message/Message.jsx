import style from './Message.module.css'

const Message = ({ message }) => {
  return (
    <div className={style.message} key={message.id}>
      <div className={style.info}>
        <p className={style.holder}>Andrew Garett</p>
        <p className={style.time}>{message.time}</p>
      </div>
      <div className={style.text}>{message.text}</div>
    </div>
  )
}

export default Message;