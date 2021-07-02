import React from 'react'
import Avatar from 'react-avatar'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deleteContact} from '../../actions/ContactAction'

const Contact = (props) => {
    const dispatch = useDispatch()
    const {id, name, email, phone} = props.contact
    return (
        <tr key={id}>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" checked={props.selectAll} className="custom-control-input" id="customCheck" />
                    <label className="custom-control-label" for="customCheck"></label>
                </div>
            </td>
            <td><Avatar className="mr-2" name={name} size="50" round /> {name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
            <Link to={`/contact/editcontact/${id}`}><i className="material-icons text-primary">edit</i></Link> &nbsp;
            <Link to="#" onClick={() => dispatch(deleteContact(id))}><i className="material-icons text-danger">delete</i></Link>
            </td>
        </tr>
    )
}

export default Contact
