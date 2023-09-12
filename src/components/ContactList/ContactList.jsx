import React from "react";
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ children }) => {
    return <ul className={css.contactList}>{children}</ul>
};

ContactList.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContactList;
