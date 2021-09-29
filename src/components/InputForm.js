import React from "react";
import Modal from 'react-modal'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
export default function InputForm ({ isOpen, setIsOpen }){
  function closeModal() {
    setIsOpen(false);
  }
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Update the graph</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="label" class="form-label">Label</label>
                            <input type="email" class="form-control" id="label" placeholder="Oct 10"/>
                        </div>
                        <div class="mb-3">
                            <label for="currency" class="form-label">Currency</label>
                            <input type="text" class="form-control" id="currency" placeholder="$1,000"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}