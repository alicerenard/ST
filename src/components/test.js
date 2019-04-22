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
*/import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

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

export default FormPage;