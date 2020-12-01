import React, { useState } from 'react';

const userInfo = {
  signedIn: false,
  firstName: "David",
  lastName: "Bernstein"
};
const userInfoUpdate = () => {};
const contactsInfo = {
  contacts: [],
  currentPage: 1,
  totalCount: 0
};
const contactsUpdate = () => {};

const UserContext = React.createContext([
  userInfo,
  userInfoUpdate,
  contactsInfo,
  contactsUpdate
]);

const UserContextProvider = (props) => {
  const [user, setUser] = useState(userInfo);
  const [contacts, setContacts] = useState(contactsInfo);
  return (
    <UserContext.Provider value={[user, setUser, contacts, setContacts]}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };