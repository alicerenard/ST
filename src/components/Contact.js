import React, {Component} from 'react'
import noavatar from '../img/noavatar.png'
import FormPage from './test'
import {  MDBRow,  MDBCol,  MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

class Contact extends Component {
  state = {
    isOpen: false,
    isAvatarOriginal: true
  }
  
  render() {
    const {contact} = this.props
    const body = this.state.isOpen && <div  style = {{margin:'3%'}}><MDBIcon icon="envelope"/>&nbsp;&nbsp;{contact.email}<FormPage/></div>
    const avatarCallback = this.state.isAvatarOriginal ? this.onAvatarLoadingErrorHandler : null
    const avatarSource = this.state.isAvatarOriginal ? contact.avatar : noavatar

    return (
      <div className="shadow-box-example hoverable" style = {{margin:'3%'}}> 
        <div className="card-header"> 
              <h2 className=" font-weight-bold my-5">
                <img src={avatarSource} alt={contact.name} width="64" height="64" hspace="2%" className="rounded-circle img-fluid" onError = {avatarCallback} />
                {contact.name}
                <MDBIcon icon="edit" className=" float-right  " />
                <button onClick={this.handleClick} className="btn btn-primary float-right  "> 
                  {this.state.isOpen ?  'edit' : 'close'}
                </button>
             </h2>
        </div> 
        <div style = {{margin:'3%'}}> 
          <h6>
            <MDBIcon icon="mobile-alt"/>&nbsp;&nbsp;
            {contact.phone}
                          
             
          </h6>   
          {body}          
        </div>  
      </div>   
    )
  }
  
  onAvatarLoadingErrorHandler = (e) => {
    console.log('---', 'Using default avatar instead of not loaded')
    this.setState({
      isOpen: this.state.isOpen,
      isAvatarOriginal: false
   })
  }
  
  handleClick = () => {
    console.log('---','clicked')
    this.setState({
      isOpen: !this.state.isOpen,
      isAvatarOriginal: this.state.isAvatarOriginal
   })
  }
}




export default Contact