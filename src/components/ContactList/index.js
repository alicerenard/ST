import React from 'react'
import Contact from '../Contact'
import './style.css'


export default function ContactList( {contacts, onContactsChanged} ) {
    const contactElements = contacts.map(contact =>
          <li key = {contact.username} className="contact-list_li"><Contact contact = {contact} onContactsChanged = {onContactsChanged}/></li>)
    return (       
         <ul>
            {contactElements}
         </ul>
    )
}