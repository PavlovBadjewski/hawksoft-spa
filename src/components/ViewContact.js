import React from 'react';

const ViewContact = ({
  contact
}) => {
  return(
      <div className="contact-fields">
        <div>
          <label>First Name:</label>
          <span>{contact.firstName}</span>
        </div>
        <div>
          <label>Last Name:</label>
          <span>{contact.lastName}</span>
        </div>
        <div>
          <label>Email:</label>
          <span>{contact.email}</span>
        </div>
        <div>
          <label>Address:</label>
          <span>{contact.address}</span>
        </div>
      </div>
  );
}

export default ViewContact;