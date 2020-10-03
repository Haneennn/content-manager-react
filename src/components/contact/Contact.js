import React from 'react';
import Avatar from 'react-avatar';
import {Link } from 'react-router-dom';
import {deleteContact} from '../../action/ContactAction';
import {useDispatch} from 'react-redux';


const Contact = ({contact, selectAll}) => {
    const dispatch = useDispatch();
    const {name, phone, email,id} = contact;
    return (
            <tr>
          <td> 
          <div className="custom-control custom-checkbox">
              <input checked={selectAll} type="checkbox" className="custom-control-input"/>
              <label className="custom-control-label"></label>
          </div>
          </td>
      <td><Avatar name={name} size="45" round={true}/> {name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
          <Link to={`/contact/edit/${id}`}>
              <span className="material-icons mr-2">edit</span>
        </Link>
          <Link to="#">
              <span className="material-icons" onClick={() => dispatch(deleteContact(id))}>remove_circle</span>
          </Link>
      </td>
    </tr>
       
    )
}

export default Contact
