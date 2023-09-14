import React from "react";
import css from './ContactItem.module.css';
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter, deleteContact } from "redux/contactsSlice";

const ContactItem = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onDelete = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    const visibleContacts =
        contacts.length > 0
            ? contacts.filter((contact) =>
                  contact.name.toLowerCase().includes(filter.toLowerCase())
              )
            : [];

    return (
        <div>
            {visibleContacts.length > 0 ? (
                <ul>
                    {visibleContacts.map((contact) => (
                        <li key={contact.id} className={css.contact}>
                            {contact.name}: {contact.number}{' '}
                            <button
                                type='button'
                                onClick={() => onDelete(contact.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>There are no contacts in your phonebook</p>
            )}
        </div>
    );
};

export default ContactItem;
