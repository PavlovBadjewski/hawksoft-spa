import React, { useRef, useEffect } from 'react';

const EditContact = ({
  contact,
  action
}) => {

  let firstNameRef = useRef();
  let lastNameRef = useRef();
  let emailRef = useRef();
  let addressRef = useRef();

  useEffect(() => {
    firstNameRef.current.value = contact.firstName || '';
    lastNameRef.current.value = contact.lastName || '';
    emailRef.current.value = contact.email || '';
    addressRef.current.value = contact.address || '';
  }, [contact]);

  const updateContact = (field, val) => {
    contact[field] = val;
    action(contact);
  };

  return(
      <div className="contact-fields">
        <div>
          <label>First Name:</label>
          <input type="text" ref={firstNameRef} onBlur={(e) => updateContact('firstName', e.target.value)} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" ref={lastNameRef} onBlur={(e) => updateContact('lastName', e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" ref={emailRef} onBlur={(e) => updateContact('email', e.target.value)} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" ref={addressRef} onBlur={(e) => updateContact('address', e.target.value)} />
        </div>
      </div>
  );
}

export default EditContact;