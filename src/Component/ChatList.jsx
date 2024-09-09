import { useEffect, useRef } from "react";
import user from "../assets/dp/user.jpeg";
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { chatSelector, SET_CHATS } from "../redux/reducers.js/chat_reducer";
import { chatsjson } from "../json/chats";
import { Link } from "react-router-dom";

export default function ChatList({ setContacts }) {
  const dispatch = useDispatch();
  const { chats } = useSelector(chatSelector);
  const userNameInput = useRef();

  // filter chats with user name
  const filter = (userNameInput) => {
    userNameInput = userNameInput.current.value
    const filteredUser = chatsjson.filter((elem) => {
      return elem.name.slice(0, userNameInput.length) == userNameInput
    })
   dispatch(SET_CHATS(filteredUser))
  };

  return (
    <section className="chatlist-sec">
      <div className="chatlist-head">
        <h4>Chats</h4>
        <IoIosAdd className="new-msg" onClick={() => setContacts(true)} />
      </div>
      <input
        type="text"
        placeholder="Search messages"
        ref={userNameInput}
        onInput={() => filter(userNameInput)}
      />
      <h3>Recent</h3>
      <div className="chatslist-container">
        {chats.map((chat, i) => (
          <Link className="chat-user" key={i} to={`/${chat.userid}`}>
            <div
              className="icon"
              style={{ backgroundImage: `url(${chat.image})` }}
            ></div>
            <div className="chat">
              <h5>{chat.name}</h5>
              <p>
                {chat.chat.length > 0
                  ? chat.chat[0].sender || chat.chat[0].me
                  : null}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
