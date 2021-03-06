import React, {Component} from 'react'
import {MDBIcon} from "mdbreact";
import noavatar from '../img/noavatar.png'
import EditingContact from './EditingContact'

class Contact extends Component {
  state = {
    isOpen: false,
    isEditing: false,
    isAvatarOriginal: true
  }
  
  render() {
    const {contact} = this.props
    
    const body = this.state.isOpen && 
      <div>
      </div>
    
    const editForm =  this.state.isEditing && 
      <div  >
        <EditingContact contact={contact} onFinished={this.onEditingFinished}/>        
      </div>
    
    const avatarCallback = this.state.isAvatarOriginal ? this.onAvatarLoadingErrorHandler : null
    const avatarSource = this.state.isAvatarOriginal ? contact.avatar : noavatar

    return (
      <div className="shadow-box-example hoverable brd"> 
        <div style = {{margin:'3%'}}> 
             <span>
                <img src={avatarSource} alt={contact.name} width="64" height="64" hspace="2%" className="rounded-circle img-fluid" onError = {avatarCallback} />
                <h4 className=" h1-name">
                  {contact.name}
                </h4>  
               </span>
              <span className="float-right">  
                <MDBIcon icon="edit" onClick={this.handleClick}/>              
              </span>  
                  
        
             
        </div>
        <div style = {{margin:'3%'}}> 
          <h6>
            <p>&nbsp;<MDBIcon icon="mobile-alt" />&nbsp;&nbsp;
            {contact.phone}</p>
            <p><MDBIcon icon="envelope"/>&nbsp;&nbsp;
            {contact.email}</p>              
             
          </h6>   
          {body}
          {editForm}               
        </div>  
      </div>   
    )
  }
  
  onAvatarLoadingErrorHandler = (e) => {
    this.setState({
      isAvatarOriginal: false
   })
  }
  
  handleClick = () => {
    this.setState((state) => {
      return {
        isEditing: !state.isEditing
      }
   })
  }

  onEditingFinished = (isSaved) => {
    if (isSaved) {
      this.props.onContactsChanged()
    }
    
    this.setState({
      isEditing: false
     })

  }
}

export default Contact
