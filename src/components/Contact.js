import React, { useState } from 'react'
import '../styles/Contact.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import flags from 'react-phone-number-input/flags'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState()
  const [message, setMessage] = useState('')

  const [formData, setFormData] = useState([])

  const submitForm = (e) => {
    e.preventDefault();

    const entery = { name: name, email: email, phone: phone, message: message };
    setFormData([entery, ...formData])

  }
  return (
    /**Container Hold the complete contact page */
    <div className='contact-container' id='contact'>
      <h1>Contact Us</h1>

      {/**Making the contact page sperated from the heading part of the page */}
      <div className='contact'>

        {/**Forms container that are align left side of the page  */}
        <div className='from-container'>

          {/**Accutal contact form  */}
        <form action='' onSubmit={submitForm}>
          <div className='input-row'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className='input-row'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='input-row'>
            <label htmlFor='phone'>Phone</label>
            <PhoneInput
              className='PhoneInput'
              value={phone}
              onChange={setPhone}
              defaultCountry='PK'
              international
              countryCallingCodeEditable={false}
              flags={flags}
            />
          </div>

          <div className='input-row'>
            <label htmlFor='message'>Message</label>
            <textarea type='text' id='message' name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>

          <button type='submit'>Submit</button>

        </form>
        </div>

        {/** Map container hold the map */}
        <div className='map'>
          <h1>Hello</h1>
          <iframe>

          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;
