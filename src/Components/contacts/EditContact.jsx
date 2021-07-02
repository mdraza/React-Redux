import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editContact, updateContact } from '../../actions/ContactAction'
import {useHistory, useParams} from 'react-router-dom'

const EditContact = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const histry = useHistory()
    const contact = useSelector(state => state.contact.contact)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    useEffect(() =>{
        if(contact != null){
            setName(contact.name)
            setEmail(contact.email)
            setPhone(contact.phone)
        }
        dispatch(editContact(id))
    }, [contact])

    const onUpdateContact = (e) => {
        e.preventDefault()
        const updContact = Object.assign(contact, {name:name, email:email, phone:phone})
        dispatch(updateContact(updContact))
        histry.push("/")
    }

    return (
        <div className="container py-5 w-50">
            <h3>Update Contacts</h3>
            <form onSubmit={onUpdateContact}>
            <div className="form-group mt-3">
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" />
            </div>
            <div className="form-group mt-3">
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group mt-3">
                <input type="text" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter Phone Number"/>
            </div>
            <button type="submit" className="mt-3 btn btn-primary">Update Contacts</button>
            </form>
        </div>
    )
}

export default EditContact