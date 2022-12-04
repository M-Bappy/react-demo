import { useState } from "react";

const CONTACT_FORM_INIT_STATE = {
    name: '',
    email: ''
}

const ContactForm = ({getContact})=>{
    const [values, setValues]= useState({...CONTACT_FORM_INIT_STATE});
    const {name, email} = values;

    function handleInput(e){
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        getContact(values);
        setValues({...CONTACT_FORM_INIT_STATE})
    }



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" value={name} onChange={handleInput} />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" value={email} onChange={handleInput} />
            </div>
            <div>
                <button type="submit">Create a new contact</button>
            </div>
        </form>
    )
}

const DataTable = ({contactInfo})=>{
    console.log(contactInfo);
    return (
        <ul>
            {
                contactInfo.map((contact, index)=> <li key={index}>
                    <div>
                        {contact.name}
                    </div>
                    <div>
                        {contact.email}
                    </div>
                </li>)
            }
        </ul>
    )
}

const Contact = () => {

   const [contact, setContact]= useState([])
    function getContact(values){        
        setContact(contact.concat(values))
    }


    return (
        <div>
            <h1>contact</h1>
            <ContactForm getContact={getContact} />
            <DataTable contactInfo={contact}/>
        </div>
    );
};

export default Contact;