/*import React, { Fragment } from "react"
import { MDBBtn } from "mdbreact"

const ButtonPage = () => {
    return (
      <Fragment>
        <MDBBtn color="primary">Primary</MDBBtn>
        <MDBBtn>Default</MDBBtn>
        <MDBBtn color="secondary">Secondary</MDBBtn>
        <MDBBtn color="success">Success</MDBBtn>
        <MDBBtn color="info">Info</MDBBtn>
        <MDBBtn color="warning">Warning</MDBBtn>
        <MDBBtn color="danger">Danger</MDBBtn>
      </Fragment>
    );
  }
  
  export default ButtonPage;
*/import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';



export default class EditingContact extends Component {

  render() {
    const {contact, onFinished} = this.props
    
    this.name = contact.name
    this.email = contact.email
    this.phone = contact.phone

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
              onChange = {(e) => {this.name = e.target.value}}
            />

            <MDBInput
              label="Phone"
              icon="mobile-alt"
              group
              type="text"
              onChange = {(e) => {this.phone = e.target.value}}
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
              onChange = {(e) => {this.email = e.target.value}}
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

  console.log('---', this.name)
  console.log('---', this.email)
  console.log('---', this.phone)

  contact.name = this.name
  contact.email = this.email
  contact.phone = this.phone

  onFinished(true)
}

onCancelClicked = () => 
{
  const {onFinished} = this.props
  onFinished(false)  
}

}


/*

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Edit contact</p>
            <div className="grey-text">
              <MDBInput
                label="New Name"
                icon="user-circle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />

              <MDBInput
                label="New email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="New mobile number"
                icon="mobile-alt"
                group
                type="text"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn>save
              </MDBBtn>
              <MDBBtn>cancel
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;*/