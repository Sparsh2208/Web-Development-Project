import React from 'react';

function EditModal({ show, onHide, editEvent }) {
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        {/* Add your edit event form or content here */}
        <button onClick={onHide}>Close</button>
      </div>
    </div>
  );
}

export default EditModal;
