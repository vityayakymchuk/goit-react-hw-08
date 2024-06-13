import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectNameFilter } from '../redux/filtersSlice';


const handlePending = state => {
  state.error = null;
  state.loading = true;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [], 
    loading: false, 
    error: null,
   },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload; 
        state.loading = false;
      })
    .addCase(fetchContacts.rejected, state =>
    {
      state.loading = false; 
      state.error = "Failed to fetch contacts";
    })
    .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload); 
        state.loading = false;
      })
    .addCase(addContact.rejected, state =>
    {
      state.loading = false; 
      state.error = "Failed to add contact";
    })
     .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.loading = false;
      })
    .addCase(deleteContact.rejected, state =>
    {
      state.loading = false; 
      state.error = "Failed to delete contact ";
    })
  }
});
 
export const selectContacts = state =>
  state.contacts.items;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter], (visibleContacts, filter) => {
    return visibleContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()))
  }
)


export default contactsSlice.reducer;


