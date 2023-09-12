import React from "react";
import css from './ContactItem.module.css';
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter, deleteContact } from "redux/contactsSlice";

const ContactItem = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const visibleContacts = () => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const onDelete = contactId => {
        dispatch(deleteContact(contactId))
    };
    return (
        <div>
            {visibleContacts.length === 0 ? (
                <p>No contacts found.</p>
            ) : (
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
            )}
        </div>
    );
};

export default ContactItem;
