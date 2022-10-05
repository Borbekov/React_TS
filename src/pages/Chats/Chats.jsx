import Chat from '../../components/Chats/Chat/Chat';
import style from './Chats.module.css'
import FriendsList from '../../components/Chats/FriendsList/FriendsList';
import { connect } from 'react-redux';
import { updateMessageText, addMessage } from '../../redux/reducers/chat-reducer';

const Chats = (props) => {
  return (
    <div className={style.chats_wrapper}>
      <FriendsList friends={props.friends} />
      <Chat
        messages={props.messages}
        newMessageText={props.newMessageText}
        updateMessageText={props.updateMessageText}
        addMessage={props.addMessage}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    friends: state.messagePage.friends,
    messages: state.messagePage.messages,
    newMessageText: state.messagePage.newMessageText
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateMessageText: (text) => {
//       dispatch(updateMessageTextActionCreator(text))
//     },
//     addMessage: () => {
//       dispatch(addMessageActionCreator())
//     }
//   }
// }

export default connect(mapStateToProps, { updateMessageText, addMessage })(Chats);