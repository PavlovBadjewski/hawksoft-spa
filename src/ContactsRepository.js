import axios from 'axios';

const webApiPort = 'localhost:56754';
const apiVersion = '/api/v1';
const path = `${webApiPort}${apiVersion}`;
const GetContacts = async ({
  page,
  limit
}) => {
  return await axios.get(`http://${path}/contacts?page=${page}&limit=${limit}`) 
  .then(response => {
    const { data: paginatedContacts } = response;
    const { contacts, totalCount } = paginatedContacts;

    return {
      contacts,
      totalCount,
      currentPage: page
    };
  })
  .catch(error => {
    console.log(`Error occurred: ${JSON.stringify(error)}`)
  });
}

const DeleteContact = async ({
  id,
  success
}) => {
  return await axios.delete(`http://${path}/contacts/${id}/`)
  .then(resp => {
      success();
  }).catch(error => {
      console.log(error);
  });
}

const UpdateContact = async ({
  id,
  contact,
  success
}) => {
  return await axios.put(`http://${path}/contacts/${id}/`, contact)
  .then(resp => {
      success();
  }).catch(error => {
      console.log(error);
  });
}

const CreateContact = async ({
  contact,
  success
}) => {
  return await axios.post(`http://${path}/contacts/`, contact)
  .then(resp => {
      success();
  }).catch(error => {
      console.log(error);
  });
}

export { GetContacts, DeleteContact, UpdateContact, CreateContact };