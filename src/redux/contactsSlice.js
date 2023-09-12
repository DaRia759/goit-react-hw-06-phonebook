import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
    },
    filterContacts: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
