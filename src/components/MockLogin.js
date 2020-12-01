import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { GetContacts } from '../ContactsRepository';

const MockLogin = () => {
  const [
    user, setUser, , setContacts
  ] = useContext(UserContext);
  const isSignedIn = (signedInClass, notSignedInClass) => user.signedIn ? signedInClass : notSignedInClass;
  let [formIncomplete, setFormIncomplete] = useState(true);
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState(true);
  
  const submitForm = async () => {
    setUser(state => {
      let currentState = { ...state, signedIn: true };
      return currentState;
    });
    
    let contacts = await GetContacts({ page: 1, limit: 5 });
    setContacts(() => {
      return contacts;
    });
  };

  const getInputValue = (input) => {
    const target = input.target;

    if (target.id === 'login-username') {
      setUsername((target.value || "").trim());
    }
    if (target.id === 'login-password') {
      setPassword((target.value || "").trim());
    }

    setFormIncomplete((username.length === 0 || password.length === 0));
  }

  return(
    <div id="mock-login-form" className={isSignedIn('component-hidden', 'component-visible')}>
      <div className="mock-login-form-container">
        <div className="form-element">
          <label>User Name:</label>
          <input id="login-username" type="text" autoFocus onChange={getInputValue}></input>
        </div>
        <div className="form-element">
          <label>Password:</label>
          <input id="login-password" type="password" onChange={getInputValue}></input>
        </div>
        <div className="form-button">
          <button className={formIncomplete ? 'inactive' : 'active'} onClick={submitForm} disabled={formIncomplete}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default MockLogin;