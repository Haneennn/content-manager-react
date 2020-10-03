import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Contact from './Contact';
import {selectAllContact, clearContact, deleteAllContact} from '../../action/ContactAction';


const Contacts = () => {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false);
    const contacts = useSelector((state) => state.contact.contacts);
    const selectedContacts = useSelector((state) => state.contact.selectedContacts);
    
     
  useEffect(()=>{
      if(selectAll) {
        dispatch(selectAllContact(contacts.map((contact) => contact.id)));
      } 
      else 
      {
          dispatch(clearContact());
      }
  },[selectAll]);

    return (
        <div>
            {
                selectedContacts.length > 1 ? (
                    <button className="btn btn-success mb-3" onClick={()=> dispatch(deleteAllContact())}> Delete All</button>
                ):null
            }
            <table class="table shadow">
  <thead className="bg-danger text-white">
    <tr>
      <th >
          <div className="custom-control custom-checkbox">
              <input id="selectAll" type="checkbox" className="custom-control-input" 
              value={selectAll}
              onClick={()=> setSelectAll(!selectAll)}/>
              <label htmlFor="selectAll" className="custom-control-label"></label>
          </div>
      </th>
      <th >Name</th>
      <th >Date</th>
      <th >Email</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
      {
          contacts.map((contact) => (<Contact contact={contact} key={contact.id} selectAll={selectAll} /> ))
      }    
  </tbody>
</table>
        </div>
    )
}

export default Contacts
