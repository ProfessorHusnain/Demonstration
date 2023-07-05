import React, { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
 const [name,setName]=useState('')
 const [email,setEmail]=useState('')
 const [phone,setPhone]=useState('')
 const [message,setMessage]=useState('')

 const [formData,setFormData]=useState([])

 const submitForm =(e)=>{
  e.preventDefault();
  
  const entery ={name:name,email:email,phone:phone,message:message};
  setFormData([entery,...formData])
  
 }
  return (
    <div className='contact-container' id='contact'>
      <h1>Contact Us</h1>
      <form className='contact' action='' onSubmit={submitForm}>
        <div className='input-row'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>

        <div className='input-row'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className='input-row'>
        <label htmlFor='phone'>Phone</label>
        <input type='text' id='phone' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>

        <div className='input-row'>
        <label htmlFor='message'>Message</label>
        <textarea type='text' id='message' name='message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </div>
    
        <button type='submit'>Submit</button>
       
      </form>
    </div>
  )
}

export default Contact;
