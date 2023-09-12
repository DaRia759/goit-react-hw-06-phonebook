import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const initialState = {
//   contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" }, 
//   ],
//   filter: '',
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
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

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
