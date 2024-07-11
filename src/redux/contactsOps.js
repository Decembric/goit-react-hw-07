import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6686a48183c983911b03158e.mockapi.io"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async(_, thunkApi) => {
  try {
    const response = await axios.get('/contacts')
  return response.data
  } catch (error) {
   return thunkApi.rejectWithValue(error.message)
  }
})

export const fetchAddContact = createAsyncThunk("contacts/addContact", async(addContact, thunkApi) => {
  try {
    const response = await axios.post('/contacts', addContact)
    return response.data
  } catch (error) {
   return thunkApi.rejectWithValue(error.message)
  }
})


export const fetchRemoveContact = createAsyncThunk("contacts/removeContact", async (contactId, thunkApi) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`)
    console.log(response.data.id)
    return response.data
  } catch (error) {
   return thunkApi.rejectWithValue(error.message)
  }
})