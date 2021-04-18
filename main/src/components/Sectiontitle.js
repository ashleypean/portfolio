import React from 'react';

function Sectiontitle({ title }) {
  return (
    <div className="mi-sectiontitle">
      <h2>{title}</h2>
      <span>{title}</span>
    </div>
  );
}

export default Sectiontitle;
