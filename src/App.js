import { Outlet } from "react-router-dom";
import Aside from "./Component/Aside";
import Contacts from "./Component/Contacts";
import ChatList from "./Component/ChatList";
import { useState } from "react";

function App() {
  // contact list window toggle
  const [contacts, setContacts] = useState(false)
  
  return (
    <>
    <main>
      <Aside />
      <ChatList setContacts={setContacts} />
      <Outlet />
    </main>

    {contacts && <Contacts  setContacts={setContacts} />}
    </>
  );
}

export default App;
