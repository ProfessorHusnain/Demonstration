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
        <iframe className='map-view' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.1753569663!2d-77.1793870239628!3d38.89390590017632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2s!4v1688626026123!5m2!1sen!2s" 
        width="600"
         height="470" 
         style={{border:0}} 
         allowfullscreen=""
          loading="lazy"
           referrerpolicy="no-referrer-when-downgrade">

           </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;
