import './ContactFormStyle.css';
import React from 'react'

function ContactForm() {
  return (
    <div className='form-container'>
      <h1>Send Message to Us</h1>
      <form>
        <input placeholder='Name'/>
        <input placeholder='Email'/>
        <input placeholder='Subject'/>
        <textarea placeholder='message' rows="4"></textarea>
        <button>send Message</button>
      </form>
    </div>
  )
}
export default ContactForm;