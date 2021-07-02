import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Contact from './Contact'
import {selectContact, clearContact, deleteAllContact} from '../../actions/ContactAction'


const Contacts = () => {
    const dispatch = useDispatch()
    const [selectAll, setSelectAll] = useState(false)
    const contat = useSelector(state => state.contact.contacts)
    const selectedContacts = useSelector(state => state.contact.selectAllContact)

    useEffect(() =>{
        if(selectAll){
            dispatch(selectContact(contat.map(contact => contact.id)))
        } else{
            dispatch(clearContact())
        }
    },[selectAll])

    return (
        <div className="container py-5">
            {
                selectedContacts.length > 0 ? (<button type="button" onClick={() => dispatch(deleteAllContact())} className="btn btn-primary">Delete All</button>) : null
            }
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" value={selectAll} onClick={() => setSelectAll(!selectAll)} className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" for="customCheck"></label>
                        </div>
                    </th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      contat.map(contact => <Contact key={contact.id} selectAll={selectAll} contact={contact}/>)  
                    }
                    
                </tbody>
                </table>
        </div>
    )
}

export default Contacts
