import React, {Component} from 'react'
import ContactList from './ContactList'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component
{
    constructor() 
    {
        super()

        var isLoaded = (localStorage.getItem('ContactList') !== null)

        this.contactList = isLoaded ? JSON.parse(localStorage.getItem('ContactList')) : null

        this.state = {
            isContactListLoaded : isLoaded,
            contactLoadingErrorMessage : null 
        }

        if (!isLoaded) {
            this.requestDataFromServer('http://demo.sibers.com/users', 5000, 
                this.onContactListReceived,
                this.onContactListReceivingTimeout,
                this.onContactListReceivingError)
        }
    }

    // request contact list from the url
    requestDataFromServer(url, timeout, onReceivedCallback, onTimeoutCallback, onErrorCallback) {
        var request = new XMLHttpRequest()

        request.open('GET', url, true)

        request.timeout = timeout
        request.ontimeout = onTimeoutCallback

        request.onerror = onErrorCallback
        
        request.onreadystatechange = function() {
            if (request.readyState !== 4) {
                return
            } 
        
            var error = null

            if (request.status !== 200) {
                error =  'Request status: ' + request.status + '. ' + request.statusText;
            } else {
                try {
                    var arr = JSON.parse(request.responseText);

                    if (arr.constructor !== Array) {
                        error = "Received JSON is not an array. Received text: " + request.responseText
                    }
                } catch (err) {
                    error = 'Parsing request to JSON is failed. ' + err.message + " Received text: " + request.responseText
                }
            
                onReceivedCallback(arr, error);          
            }
        }
    
        request.send();
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
    
        console.log('---', 'Contacts were received from servers', isLoaded, error, this.contactList)

        this.setState({
            isContactListLoaded : true,
            contactLoadingErrorMessage : error            
        })
    }

    // initialize contact list and update the page
    contactListReceivingError = (errorMessage) => {
        this.contactList = []
        this.saveContactListToStorage()

        this.setState({
            isContactListLoaded : true,
            contactLoadingErrorMessage : errorMessage            
        })
    }

    // initialize contact list and update the page
    onContactListReceivingError = (e) => {
        this.contactListReceivingError('Very very very unexpected error.')
    }

    // initialize contact list and update the page
    onContactListReceivingTimeout = () => {
        this.contactListReceivingError('Connection timeout.')
    }

    render() {
        if (!this.state.isContactListLoaded) {
            return (
                <div>
                    <h1>
                        Loading contacts...
                    </h1>
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

        console.log('---', this.state)

        return (
            
            <div className="container">
                <div >
                   <p className="text-center"> 
                     <h1 className="my-header">Contact List</h1>
                     </p> 
                </div>
                <div id="ContactList">
                     <ContactList contacts = {this.contactList} onContactsChanged={this.saveContactListToStorage}/>
                </div>     
            </div>              
        )
    }    
}

export default App








