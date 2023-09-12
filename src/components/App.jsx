import React from "react";
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ListContacts from './ContactList/ContactList';
import ContactsItem from "./ContactsItem/ContactItem";
import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <h1 className={css.h1}>Phonebook</h1>
      <Form />
      <h2 className={css.h2}>Contacts</h2>
      <Filter />
      <ListContacts>
        <ContactsItem />
      </ListContacts>
    </div>
  );
};

export default App;
