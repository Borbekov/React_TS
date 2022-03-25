import Chat from '../../components/Chats/Chat/Chat';
import style from './Chats.module.css'
import FriendsList from '../../components/Chats/FriendsList/FriendsList';

const Chats = ({ store }) => {
  return (
    <div className={style.chats_wrapper}>
      {/* <FriendsList friends={state.friends} /> */}
      <Chat state={store.getState().chatReducer} dispatch={store.dispatch} />
    </div>
  )
}

export default Chats;