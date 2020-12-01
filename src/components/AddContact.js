import React, { useRef } from 'react';
import { FaWindowClose } from "react-icons/fa";

const AddContact = ({
  hideForm,
  createContact
}) => {

  let firstNameRef = useRef();
  let lastNameRef = useRef();
  let emailRef = useRef();
  let addressRef = useRef();

  const create = () => {
    createContact({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value
    });

    reset();
  }

  const hide = () => {
    hideForm(false);
    reset();
  }

  const reset = () => {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    addressRef.current.value = '';
  }

  return(
    <div>
      <div className="close-add-icon">
        <FaWindowClose onClick={() => hide()} />
      </div>
      <div className="contact-fields">
        <div>
          <label>First Name:</label>
          <input type="text" ref={firstNameRef} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" ref={lastNameRef} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" ref={emailRef} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" ref={addressRef} />
        </div>
      </div>
      <button className="add-contact-button" onClick={() => create()}>Add</button>
    </div>
  );
}

export default AddContact;