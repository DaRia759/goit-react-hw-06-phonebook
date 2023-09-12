import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, filterContacts } from 'redux/contactsSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };

  return (
    <label className={css.findZone}>
    Find contacts by name
      <input
        placeholder='Search...'
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={css.input} />
  </label>
  )
};

export default Filter;