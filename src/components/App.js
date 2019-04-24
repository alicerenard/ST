import React, {Component} from 'react'
import ContactList from './ContactList'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component
{
  constructor() 
  {
    super()
    
    // just for test
    // localStorage.removeItem('ContactList')
       
    var isLoaded = (localStorage.getItem('ContactList') !== null)

    this.contactList = isLoaded ? JSON.parse(localStorage.getItem('ContactList')) : null

    this.state = {
      isContactListLoaded : isLoaded,
      contactLoadingErrorMessage : null 
    }

    if (!isLoaded) {
      this.requestDataFromServer('http://demo.sibers.com/users', 5000, 
      this.onContactListReceived)
    }
  }

  // request contact list from the url
  requestDataFromServer(url, timeout, onReceivedCallback) {
    var request = new XMLHttpRequest()

    request.open('GET', url, true)

    request.timeout = timeout

    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        return
      } 
        
      var error = null
      var arr = null

      if (request.status !== 200) {
        error =  'Request status: ' + request.status + '. ' + request.statusText
      } else {
        try {
          arr = JSON.parse(request.responseText)

          if (arr.constructor !== Array) {
            error = 'Received JSON is not an array.'
          }
        } catch (err) {
          error = 'Parsing request to JSON is failed.' + err.message
        }
      }

      onReceivedCallback(arr, error)          
    }
    
    request.send()
  }

  // save this.contactList to localStorage
  saveContactListToStorage = () => {   
    localStorage.setItem('ContactList', JSON.stringify(this.contactList))
  }

  // initialize contact list and update the page
  onContactListReceived = (contactArray, error) => {
    var isLoaded = (error === null)
    
    this.contactList = isLoaded ? contactArray : []
    this.saveContactListToStorage()
    
    this.setState({
      isContactListLoaded : true,
      contactLoadingErrorMessage : error            
    })
  }

  render() {
    if (!this.state.isContactListLoaded) {
      return (
        <div>
        </div>
      )
    }
        
    /*    
    const errorBody = this.state.contactLoadingErrorMessage !== null && 
      <div style={{color : 'red'}}>
        <h2>
          Error occured during contact loading list: {this.state.contactLoadingErrorMessage} You start work with empty local contact list.
        </h2>
      </div>
    */
      
    return (
      <div className="container">
        <div>
          <h1 className="text-center">
            Contact List
          </h1>
        </div>
        <div id="ContactList">
          <ContactList contacts = {this.contactList} onContactsChanged={this.saveContactListToStorage}/>
        </div>     
      </div>              
    )
  }    
}

export default App
