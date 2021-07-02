import {CREATE_CONTACT, EDIT_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT, DELETE_ALL_CONTACT} from '../constant/Type'

//Action
export const addContact = (contact) => {
  return{
    type: CREATE_CONTACT,
    payload: contact 
  }
}

export const editContact = (id) => ({
  type: EDIT_CONTACT,
  payload: id
})

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact
})

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id
})

export const selectContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id
})

export const clearContact = () => ({
  type: CLEAR_CONTACT
})

export const deleteAllContact = () => ({
  type: DELETE_ALL_CONTACT
})





