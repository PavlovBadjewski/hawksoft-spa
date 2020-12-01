import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';
import PaginationBar from './PaginationBar';
import EditContact from './EditContact';
import ViewContact from './ViewContact';
import { DeleteContact, GetContacts, UpdateContact, CreateContact } from '../ContactsRepository';
import { FaAddressCard, FaTrash, FaPencilAlt, FaAddressBook, FaPlusCircle, FaWindowClose } from "react-icons/fa";
import AddContact from './AddContact';

const UserContacts = () => {
  const [
    user, , contactsInfo, setContacts
  ] = useContext(UserContext);
  const { contacts, totalCount, currentPage } = contactsInfo;
  const isSignedIn = (signedInClass, notSignedInClass) => user.signedIn ? signedInClass : notSignedInClass;
  
  let [showAddContact, setShowAddContact] = useState(false);
  let [showEditContact, setShowEditContact] = useState({});

  useEffect(() => {
  }, [showEditContact])
  
  const showContactForm = show => {
    setShowAddContact(show);
  }

  const updateShowEditContact = (id) => {
    let show = false;

    if (!showEditContact[id]) {
      show = true;
    }

    showEditContact[id] = show;
    const newContacts = Object.assign({}, showEditContact);
    setShowEditContact(newContacts);
  }
  
  const getPaginatedContacts = async (page) => {
    let contacts = await GetContacts({ page, limit: 5 });
    setContacts(() => {
      return contacts;
    });
  };
  
  const deleteContactById = (id) => {
    DeleteContact({
      id,
      success: () => getPaginatedContacts(1)
    }); 
  };
  
  const updateContact = (contact) => {
    UpdateContact({
      id: contact.contactId,
      contact,
      success: () => getPaginatedContacts(currentPage)
    }); 
  };
  
  const createContact = (contact) => {
    CreateContact({
      contact,
      success: () => {
        getPaginatedContacts(1);
        showContactForm(false);
      }
    }); 
  };

  return(
    <div id="user-contacts" className={isSignedIn('component-visible', 'component-hidden')}>
      <div className="address-book-icon"><FaAddressBook /></div>
      <div style={{display: showAddContact ? 'block' : 'none'}}>
        <AddContact hideForm={showContactForm} createContact={createContact} />
      </div>
      <div style={{display: showAddContact ? 'none' : 'block'}}>
        <div id="contacts-new">
          <FaPlusCircle className="add-icon" onClick={() => showContactForm(true)} />
        </div>
        <div id="contacts-pagination">
          <PaginationBar
            currentItemsCount={contacts.length}
            currentPage={currentPage}
            itemsPerPage={5}
            totalItems={totalCount}
            action={getPaginatedContacts}
          />
        </div>
        <div className="contacts-container">
        {contacts.map((contact, index) => (
          <div className="contact-card" key={`contact_${index}`}>
            <FaAddressCard className="contact-icon" />
            <div className="contact-actions">
              <div style={{display: showEditContact[contact.contactId] ? 'none' : 'inline-block'}}>
                <FaPencilAlt onClick={() => updateShowEditContact(contact.contactId)} />
              </div>
              <div style={{display: showEditContact[contact.contactId] ? 'inline-block' : 'none'}}>
                <FaWindowClose onClick={() => updateShowEditContact(contact.contactId)} />
              </div>
              <FaTrash onClick={() => deleteContactById(contact.contactId)} />
            </div>
            <div style={{display: showEditContact[contact.contactId] === true ? 'none' : 'block'}}>
              <ViewContact
                contact={contact}
              />
            </div>
            <div style={{display: showEditContact[contact.contactId] !== true ? 'none' : 'block'}}>
              <EditContact
                contact={contact}
                action={updateContact}
              />
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default UserContacts;