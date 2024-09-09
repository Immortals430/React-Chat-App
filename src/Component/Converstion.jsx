import user from "../assets/dp/user.jpeg";
import { IoSearch } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CgAttachment } from "react-icons/cg";
import { FaRegImage } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  chatSelector,
  SEND_MESSAGE,
  SET_ACTIVE_CHATS,
} from "../redux/reducers.js/chat_reducer";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Converstion() {
  const { chats, activeChat } = useSelector(chatSelector);
  const { id } = useParams();
  const dispatch = useDispatch();
  const msg = useRef();

  // render active chat
  useEffect(() => {
    function setActiveChat() {
      let result = chats.find((elem) => elem.userid == id);
      if (!result) result = {};
      dispatch(SET_ACTIVE_CHATS(result));
    }
    setActiveChat();
  }, [chats, id]);

  // send message 
  function sendMessage() {
    dispatch(SEND_MESSAGE({msg: msg.current.value, id}))
  }

  return (
    <section className="conversation-sec">
      <header className="conversation-header">
        <div className="conversation-user">
          <div
            className="icon"
            style={{ backgroundImage: `url(${activeChat.image})` }}
          ></div>
          <h5>{activeChat.name} </h5>
          <RxDotFilled color="#0ed39c" size={20} />
        </div>
        <div className="conversation-tools">
          <IoSearch />
          <IoCallOutline />
          <IoVideocamOutline />
          <FaRegUser />
          <BsThreeDots />
        </div>
      </header>

      <div className="conversation-container">
        {activeChat.chat
          ? activeChat.chat.map((elem, i) => (
              <div className={elem.sender ? "sender" : "receiver"} key={i}>
                <div
                  className="icon"
                  style={{
                    backgroundImage: `url(${
                      elem.sender ? activeChat.image : user
                    })`,
                  }}
                ></div>
                <p>{elem.sender ? elem.sender : elem.me}</p>
              </div>
            ))
          : null}
      </div>

      <footer className="conversation-footer">
        <input type="text" ref={msg} placeholder="Enter Message..." />
        <MdOutlineEmojiEmotions />
        <CgAttachment />
        <FaRegImage />
        <IoSend className="send-msg-btn" onClick={() => sendMessage()} />
      </footer>
    </section>
  );
}
