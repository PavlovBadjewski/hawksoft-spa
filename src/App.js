import React, { useContext } from 'react';
import './App.css';
import MockLogin from './components/MockLogin';
import UserContacts from './components/UserContacts';
import { UserContextProvider, UserContext } from './UserContext';

function App() {
  const [
    ,
    ,
    contacts,
  ] = useContext(UserContext);
  return (
    <div className="App">
      <UserContextProvider>
        <MockLogin />
        <UserContacts contacts={contacts} />
      </UserContextProvider>
    </div>
  );
}

export default App;
