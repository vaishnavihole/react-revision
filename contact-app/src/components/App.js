import React, { useState, useEffect} from 'react'
import {BrowserRouter , Routes,  Route} from 'react-router-dom';
// import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from'./ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    // setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
  };

  useEffect(() =>{
    const retriveContacts = JSON.parse(localStorage.getItem( LOCAL_STORAGE_KEY));
   if(retriveContacts) setContacts(retriveContacts)
  },[]);

  useEffect(() =>{
    localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  return(
    <div className='ui container'>
      <BrowserRouter>
      <Routes>
      <Header />
      <Route path="/add" component={AddContact} />
      <Route path="/" component={ContactList} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
