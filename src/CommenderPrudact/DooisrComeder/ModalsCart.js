import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from "mdb-react-ui-kit";


export default function Modal({open ,onClose}) {


  if (!open) return null;
  return (
    <>
     

      <MDBModal show={open} tabIndex="-1">
        <div className="text-center">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={onClose}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <MDBIcon size="6x" color="success" fas icon="check" />
              <p>Le produit a été enregistré dans carte</p>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn  onClick={onClose}>
                  Oki
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </div>
      </MDBModal>

    </>
  );
}
