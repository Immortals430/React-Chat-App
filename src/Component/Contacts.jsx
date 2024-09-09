import user from "../assets/dp/user.jpeg";
import { IoIosAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { contacts } from "../json/contacts.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chatSelector, NEW_MESSAGE } from "../redux/reducers.js/chat_reducer.js";

export default function Contacts({ setContacts }) {
  const { chats } = useSelector(chatSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // start new chat or continue existing chat
  const newMsg = (contact) => { 
    const chatExist = chats.findIndex((elem) => elem.userid == contact.id);
    if (chatExist >= 0) navigate(`/${contact.id}`);
    else {
      const newMsg = {
        userid: chats.length + 1,
        name: contact.name,
        image: contact.image,
        chat: [] 
      }
      dispatch(NEW_MESSAGE(newMsg))
      navigate(`/${contact.id}`)
    }
    setContacts(false)
  };

  return (
    <section className="contacts-sec">
      <div className="contacts-container">
        <div className="contacts-head">
          <h3>Contacts</h3>
          <RxCross2 onClick={() => setContacts(false)} cursor={"pointer"} />
        </div>

        <div className="contacts">
          {contacts.map((elem, i) => (
            <div key={i} onClick={() => newMsg(elem)}>
              <div className="contact-detail">
                <div
                  className="icon"
                  style={{ backgroundImage: `url(${elem.image})` }}
                ></div>
                <div className="user-name">{elem.name}</div>
              </div>
              <IoIosAdd className="new-msg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
