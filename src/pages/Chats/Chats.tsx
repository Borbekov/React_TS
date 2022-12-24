import Chat from '../../components/Chats/Chat/Chat';
import style from './Chats.module.css'
import FriendsList from '../../components/Chats/FriendsList/FriendsList';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../redux/reducers/chat-reducer';
import { getFriends, getMessages, getNewMessageText } from '../../selectors';

const Chats = () => {
  const friends = useSelector(getFriends)
  const messages = useSelector(getMessages)
  const newMessageText = useSelector(getNewMessageText)
  const dispatch = useDispatch()
  return (
    <div className={style.chats_wrapper}>
      <FriendsList friends={friends} />
      <Chat
        messages={messages}
        newMessageText={newMessageText}
        updateMessageText={(text) => dispatch(actionCreators.updateMessageText(text))}
        addMessage={() => dispatch(actionCreators.addMessage())}
      />
    </div>
  )
}

export default Chats