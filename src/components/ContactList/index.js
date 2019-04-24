import React, {Component} from 'react'
import {MDBIcon} from 'mdbreact';
import Contact from '../Contact'
import './style.css'



class ContactList extends Component {
  constructor(props) {
    super(props)

    this.contacts = props.contacts.slice()
    
    this.state = {}
  }    
  
  render() {
    const {onContactsChanged} = this.props

    const contactElements = this.contacts.map(contact =>
      <li key = {contact.username} className="contact-list_li"><Contact contact = {contact} onContactsChanged = {onContactsChanged}/></li>)

    return (       
      <div> 
        <div className="text-center">
          <MDBIcon icon="angle-double-up" size="2x" onClick={this.sortUpClick}/> &nbsp;            
          <MDBIcon icon="angle-double-down" size="2x" onClick={this.sortDownClick}/>              
        </div>  
        <ul>
          {contactElements}
        </ul>
      </div>  
    )
  }

  sortUpClick = () => {
    this.contacts.sort((a, b) => a.name.localeCompare(b.name))
    
    this.setState((state) => { return {} })
  }

  sortDownClick = () => {
    this.contacts.sort((b, a) => a.name.localeCompare(b.name))
    
    this.setState((state) => { return {} })
  }
}

export default ContactList
