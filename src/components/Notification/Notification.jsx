import React from 'react';
import PropTypes from 'prop-types';

function Notification(props){
  
  const { isActive = true } = props;

  if (!isActive) {
    return null;
  }

  return (
    <div className="notification">
      <button className="delete" onClick={props.onClose}></button>
      {props.content}
    </div>
  );
}

Notification.propTypes = {
  content: PropTypes.string,
  isActive: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Notification;
