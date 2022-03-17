import Chat from '../../components/Chats/Chat/Chat';
import style from './Chats.module.css'
import FriendsList from '../../components/Chats/FriendsList/FriendsList';

const Chats = ({ state }) => {
  return (
    <div className={style.chats_wrapper}>
      <FriendsList friends={state.friends} />
      <Chat messages={state.messages} />
    </div>
  )
}

export default Chats;