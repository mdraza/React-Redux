import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../actions/ContactAction'
import {useHistory} from 'react-router-dom'
import shortid  from 'shortid'

const AddContact = () => {
    const dispatch = useDispatch()
    const histry = useHistory()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const submitContact = (e) => {
        e.preventDefault()
        const new_contact = {
            id: shortid.generate(),
            name: name,
            email: email,
            phone: phone
        }
        dispatch(addContact(new_contact))
        histry.push("/")
    }

    return (
        <div className="container py-5 w-50">
            <h3>Add Contacts</h3>
            <form onSubmit={(e) => submitContact(e)}>
            <div className="form-group mt-3">
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" />
            </div>
            <div className="form-group mt-3">
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group mt-3">
                <input type="text" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter Phone Number"/>
            </div>
            <button type="submit" className="mt-3 btn btn-primary">Add Contacts</button>
            </form>
        </div>
    )
}

export default AddContact