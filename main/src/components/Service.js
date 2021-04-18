import React from 'react';
import LineIcon from 'react-lineicons';

function Service(props) {
  const { content: { icon, title, details } } = props;
  return (
    <div className="mi-service">
      <span className="mi-service-icon">
        <LineIcon name={icon} />
      </span>
      <h5>{title}</h5>
      <p>{details}</p>
    </div>
  );
}

export default Service;
