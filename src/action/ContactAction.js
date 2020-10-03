import {CREATE_CONTACT,
     GET_CONTACT,
      UPDATE_CONTACT, DELETE_CONTACT,
      SELECT_CONTACT,CLEAR_CONTACT, DELETE_ALL} from '../constant/type';

//action
export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact, 
});

//get a action

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
})

//GET AN UPDATE OF COMTACT
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
})

//DELETE A CONTACT
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
})
//select entire contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload: id,
})

//clear contact
export const clearContact = () => ({
    type: CLEAR_CONTACT,
    
})
//delete all
export const deleteAllContact = (payload) => ({
    type: DELETE_ALL,
})
