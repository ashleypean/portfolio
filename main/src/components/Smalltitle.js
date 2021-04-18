import React from 'react';
import LineIcon from 'react-lineicons';

function Smalltitle({ icon, title }) {
  return (
    <div className="mi-smalltitle">
      <span className="mi-smalltitle-icon">
        <LineIcon name={icon} />
      </span>
      <h4>{title}</h4>
    </div>
  );
}

export default Smalltitle;
