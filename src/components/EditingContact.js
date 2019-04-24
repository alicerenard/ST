import React, {Component} from "react";
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact';

class EditingContact extends Component {
  constructor(props) {
    super(props)

    const {contact} = this.props

    this.state = {
      name: contact.name,
      phone: contact.phone,
      email: contact.email
    }
  }

  handleEditing = inputName => {
    return value => {
      const nextValue = value

      this.setState({
        [inputName]: nextValue
      })
    }
  }

  render() {
    return (
    <MDBContainer>
    <MDBRow>
      <MDBCol className="w-responsive  mx-auto p-3 mt-2">
        <form>
          <p className="h5 text-center mb-4">Edit contact</p>
          <div className="grey-text">
            <MDBInput
              label="Contact name"
              icon="user-circle"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              hint={this.state.name}
              getValue = {this.handleEditing("name")}
            />

            <MDBInput
              label="Phone"
              icon="mobile-alt"
              group
              type="text"
              hint={this.state.phone}
              getValue = {this.handleEditing("phone")}
              validate
            />
            <MDBInput
              label="Email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
              hint={this.state.email}
              getValue = {this.handleEditing("email")}
            />

          </div>
          <div className="text-center">
            <MDBBtn color="blue-grey" onClick={this.onSaveClicked}>save
            </MDBBtn>
            <MDBBtn color="blue-grey" onClick={this.onCancelClicked}>cancel
            </MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
    )
  }

  onSaveClicked = () => 
  {
    const {contact, onFinished} = this.props

    contact.name = this.state.name.trim()
    contact.email = this.state.email.trim()
    contact.phone = this.state.phone.trim()

    onFinished(true)
   } 

  onCancelClicked = () => 
  {
    const {contact, onFinished} = this.props

    this.setState({
      name: contact.name,
      phone: contact.phone,
      email: contact.email
   })

    onFinished(false)  
  }
}

export default EditingContact
